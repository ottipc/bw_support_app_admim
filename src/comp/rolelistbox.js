import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import {UserRightBox} from "./userrightlistbox";
import apiService from '../api/apiService';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {makeStyles} from "@material-ui/core/styles";
import {NotificationContainer} from 'react-notifications';
import {createNotification} from './Notification';
import 'font-awesome/css/font-awesome.css'
import 'react-notifications/lib/notifications.css';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';




/**
 * style
 *
 * @type {((props?: any) => ClassNameMap<string>) | *}
 */
const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        //flexGrow: 1,
    }, heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

/**
 * standard value for user role box
 *
 * @type {*[]}
 */
const options = [{
    value: 'one',
    label: 'Option One'
},
    {
        value: 'two',
        label: 'Option Two'
    },
];

/**
 *
 * Component for setting user-role-box
 * be shown in user.js
 *
 * @component
 *
 */
export class RoleListBox extends React.Component {

    state = {
        selected: ['1', '2']
    };

    /**
     *  CONSTRUCT user-role-box
     *
     * @param props
     * @constructor
     */
    constructor(props) {
        super(props);
        console.log("*** CONSTRUCT ROLE LIST BOX ***");
        console.log(props);
        let id_user = props.id_user;
        console.log(id_user);


        this.state = {
            allrolesrow: [],
            allroles: [],
            userroles: [],
            deletedroles: [],
            selected: [1],
            initialroles: [],
            relationobjects: []
        };

    }

    /**
     *
     * invoke JUST ONCE onload or reload
     *
     * @function
     *
     */
    componentDidMount() {
        console.log("*** ROLE LIST BOX DID MOUNT ***");
        this.setAllRolesToState();
        this.getUserRolesToState();

    }

    /**
     *
     * send HTTP request to get User Roles
     * save UserRoles to the state
     *
     * @function
     */
    getUserRolesToState() {
        let userroles = [];
        let relations = [];
        console.log(this.props)
        apiService.fetchRoleListForUser(this.props.id_user).then(response => response)
            .then(response => {
                response.data.map(function (val) {
                    userroles.push(val.id_role);
                    relations.push(val);
                });
                this.setState({
                    selected: userroles,
                    initialroles: userroles,
                    relationobjects: relations
                })
            }).catch(err => {
            console.log(err);
        });
    }

    /**
     *
     * send HTTP request to get All Roles
     * save AllRoles to the state
     *
     * @function
     */
    setAllRolesToState() {
        apiService.fetchAllRoleObjects().then(response => {
            this.setState({
                allrolesraw: response.data,
                allroles: JSON.stringify(response.data)
            })
        }).catch(err => {
            console.log(err);
        });
    }

    /**
     *
     * function for editing user-role-box
     * create a new role to user
     * remove a role from user
     *
     * @param event
     * @function
     */
    updateRoles(event) {
        event.preventDefault();
        if (this) {
            let initials = this.state.initialroles;
            let selected = this.state.selected;
            let currentUserId = this.props.id_user;
            let realtions = this.state.relationobjects;
            let toCreate = [];
            let toDelete = [];


            this.state.allrolesraw.map(function (val) {

                console.log("------- VALUE  ----------------");
              //  console.log(val.id);
                let roleId = val.id;
                if (initials.includes(roleId) && !selected.includes(roleId)) {
                    let idToDelete = realtions.map(function (val) {
                        //console.log(JSON.stringify(val));
                        let definedRelation = JSON.parse(JSON.stringify(val));
                        if (definedRelation.id_user == currentUserId && definedRelation.id_role == roleId) {

                            confirmAlert({
                                title: 'Confirm to submit',
                                message: 'Are you sure you want to delete Role from User.',
                                buttons: [
                                    {
                                        label: 'Yes',
                                        onClick: () => {
                                            toDelete.push(roleId);
                                            console.log("------- to delete  ----------------");
                                            console.log(definedRelation.id);
                                            apiService.deleteUserRole(definedRelation.id);
                                            createNotification("warning", "Role deleted", "Role for User deleted");
                                            return definedRelation.id;
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

                } else if (!initials.includes(roleId) && selected.includes(roleId)) {
                    toCreate.push(roleId);
                    //only possible to post one entry
                    apiService.createUserRole({"id_role": roleId, "id_user": currentUserId});
                    createNotification("success", "Role saved", "Role for User persisted");
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
        //alert(selected)
        this.setState({
            selected: selected,
            userroles: selected
        });
        //UserRightBox.getDerivedStateFromProps()
    };

    /**
     *
     * @param text
     * @function
     */
    changingRightsChild(text) {
    }




    /**
     * rendering role list box
     * @returns {*}
     */
    render() {
        if (this.state.allroles && this.state.allroles.length > 0) {
            const parsedJsonObject = JSON.parse(this.state.allroles.replace(/id/g, "value").replace(/name/g, "label"));

            return (<div >
                <DualListBox showHeaderLabels="true" options={parsedJsonObject} selected={this.state.selected}
                             onChange={this.onChange}/>

                <NotificationContainer/>
                <ExpansionPanel defaultExpanded={true}>
                    <Typography className={useStyles.heading}>Rights of User</Typography>
                    <ExpansionPanelDetails >
                        <UserRightBox selected={this.state.selected} userid={this.props.id_user} k />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <button
                    className="sabu"
                    onChange={(e) => this.changingRightsChild(e.target.value)}
                    onClick={(event) => this.updateRoles(event)}><i className="fa fa-save"></i>
                    Save
                </button>
            </div>);

        }
        return (<div  ><DualListBox  options={options} selected={this.state.selected}
                                  icons={{
                                      moveLeft: <span className="fa fa-chevron-left"/>,
                                      moveAllLeft: [
                                          <span key={0} className="fa fa-chevron-left"/>,
                                          <span key={1} className="fa fa-chevron-left"/>,
                                      ],
                                      moveRight: <span className="fa fa-chevron-right"/>,
                                      moveAllRight: [
                                          <span key={0} className="fa fa-chevron-right"/>,
                                          <span key={1} className="fa fa-chevron-right"/>,
                                      ],
                                      moveDown: <span className="fa fa-chevron-down"/>,
                                      moveUp: <span className="fa fa-chevron-up"/>,
                                  }}


                                   /></div>);
    }
}

export default RoleListBox;
