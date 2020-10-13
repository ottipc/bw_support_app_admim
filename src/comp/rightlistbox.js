import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import dataProvider from '../api/dataProvider';
import apiService from '../api/apiService';
import {createNotification} from './Notification';
import {NotificationContainer} from "react-notifications";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

/**
 * component for creating role-right-list
 *
 * @component
 *
 */
export class RightListBox extends React.Component {
    /**
     * Construct right list box
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            allRightsrow: [],
            allRights: [],
            roleRights: [],
            deletedRights: [],
            selected: [1],
            initialRights: [],
            relationobjects: []
        };
        this.handleClick = this.updateRights.bind(this);
        //this.props.hurensohn = "was";
    }

    /**
     *
     * invoke JUST ONCE onload or reload
     *
     * @function
     *
     */
    componentDidMount() {
        this.setAllRightsToState();
        this.getroleRightsToState();

    }

    /**
     *
     * send HTTP request to get Role Rights
     * save roleRights to the state
     *
     *@function
     *
     */
    getroleRightsToState() {
        console.log("------- Set Role Rights ----------------")
        let roleRights = [];
        let relations = [];
        this.fetchRightIdsForRole().then(response => response)
            .then(response => {
                response.data.map(function (val) {
                    roleRights.push(val.id_right);
                    relations.push(val);
                });
                console.log(roleRights);
                this.setState({
                    selected: roleRights,
                    initialRights: roleRights,
                    relationobjects: relations
                })
            }).catch(err => {
            console.log(err);
        });
    }

    /**
     * function for getting the Right for a specified Role
     *
     * @returns {*}
     * @function
     */
    fetchRightIdsForRole() {
        return dataProvider.getList('role_right', {
            pagination: {
                page: 1,
                perPage: 50
            },
            sort: {
                field: 'id',
                order: 'asc'
            },
            filter: {
                id_role: this.props.record.id
            },
        });
    }


    /**
     *
     *  send HTTP request to get All Rights
     *  save AllRights to the state
     *
     *  @function
     */
    setAllRightsToState() {
        console.log("------- Set All Rights ----------------")
        apiService.fetchAllRights().then(response => response)
            .then(response => {
                //  console.log(JSON.stringify(response.data));
                this.setState({
                    allRightsraw: response.data,
                    allRights: JSON.stringify(response.data)
                })
            }).catch(err => {
            console.log(err);
        });
    }

    /**
     *
     * function for editing role-right-box
     * add a new right to a role
     * remove a right from a role
     *
     * @param e
     * @function
     */
    updateRights(e) {

        e.preventDefault();
        function createRoleRight(payload) {
            dataProvider
                .create('role_right', {data: payload})
                .then(response => {
                    // success side effects go here
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }


        function deleteRoleRight(relationId) {

            dataProvider
                .delete('role_right', {id: relationId})
                .then(response => {
                    // success side effects go here
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        if (this) {
            console.log("------- Now we aggregating ----------------");
            console.log(this.props);

            let initials = this.state.initialRights;
            let selected = this.state.selected;
            let currentRoleId = this.props.record.id;
            let realtions = this.state.relationobjects;

            var tocreate = [];
            var todelete = [];

            this.state.allRightsraw.map(function (val) {

                console.log("------- VALUE  ----------------");
                console.log(val.id);
                let rightId = val.id;
                if (initials.includes(rightId) && !selected.includes(rightId)) {
                    console.log("------- Deleting .....  ----------------");

                    console.log("--------- REALTIONS -----------------");

                    let idToDelete = realtions.map(function (val) {
                        console.log(JSON.stringify(val));
                        let definedrelation = JSON.parse(JSON.stringify(val));
                        // eslint-disable-next-line eqeqeq
                        if (definedrelation.id_role == currentRoleId && definedrelation.id_right == rightId) {
                            //console.log("ID : " + definedrelation.id);
                            //console.log(rightId);
                            confirmAlert({
                                title: 'Confirm to submit',
                                message: 'Are you sure, you want to delete Right from Role.',
                                buttons: [
                                    {
                                        label: 'Yes',
                                        onClick: () => {
                                            todelete.push(rightId);
                                            deleteRoleRight(definedrelation.id);
                                            createNotification("warning", "Right deleted", "Right for Role deleted");
                                            return definedrelation.id;
                                        }
                                    },
                                    {
                                        label: 'No',
                                        onClick: () => console.log("-----NO-----")
                                    }
                                ]
                            });
                        }
                    });

                } else if (!initials.includes(rightId) && selected.includes(rightId)) {
                    console.log("------- Creating .....  ----------------");

                    tocreate.push(rightId);
                    //only possible to post one entry
                    let payload = JSON.stringify({id_right: rightId, id_role: currentRoleId});
                    console.log(payload);
                    createRoleRight({"id_right": rightId, "id_role": currentRoleId});
                    createNotification("success", "Right saved", "Right for Role persisted");
                }
            });


        }
    }


    /**
     * invoke whenever there is a change
     *
     * @param selected
     * @function
     */
    onChange = (selected) => {
        this.setState({
            selected
        });
    };

    /**
     *
     * Rendering Role Right box
     *
     * @returns {*}
     */
    render() {
        if (this.state.allRights.length && this.state.allRights.length != 0) {
            var rig = JSON.parse(this.state.allRights.replace(/id/g, "value").replace(/name/g, "label"));
            rig.map(function (val) {

                delete val.created_at;
                delete val.updated_at;
            });

            return (<div><DualListBox options={rig} selected={this.state.selected} onChange={this.onChange}/>
                <button className="sabu" onClick={this.updateRights.bind(this)}>Save rights
                </button>
                <NotificationContainer/>
            </div>);

        }
        return (<div><DualListBox options={this.state.selected} selected={this.state.selected}/></div>);
    }
}

export default RightListBox;
