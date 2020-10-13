import React from 'react';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import Chip from '@material-ui/core/Chip';
import LinkAnyFieldButton from "./linkAnyFieldButton";
import apiService from '../api/apiService';

function updateState(text) {
    this.setState({text})
}


/**
 *
 * Component for showing  RIGHTS in  user role box
 * be shown in user.js
 *
 * @component
 *
 */
export class UserRightBox extends React.Component {

    /**
     *
     * CONSTRUCT USER-RIGHT BOX
     *
     * @param props
     * @constructor
     *
     */
    constructor(props) {
        super(props);
        //  console.log("*** CONSTRUCT USER RIGHT BOX ***");
        // Don't call this.setState() here!
        this.state = {
            userroles: [],
            roleRights: [],
            rightObjects: []
        };
        this.setRightOfUser = this.setRightOfUser.bind(this);
        updateState = updateState.bind(this)
    }

    updateState() {
        this.setState({shown: false});
    }

    /**
     *
     *invoke WHENEVER THERE IS AN UPDATE IN USER-RIGHT BOX
     *
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {

        if (JSON.stringify(prevProps.selected) !== JSON.stringify(this.props.selected)) {
            this.setRightOfUser();
        }

    }

    /**
     *
     *  invoke JUST ONCE onload or reload
     *
     *  @function
     *
     */
    componentDidMount() {
        this.setRightOfUser();
    }

    /**
     *
     * invoke whenever the component receives new props.
     *
     * @param props
     * @param state
     * @returns {null|{cachedSomeProp: *}}
     */
    static getDerivedStateFromProps(props, state) {


        return null;
        return {
            cachedSomeProp: props,
            // ... other derived state properties
        };
    }


    /**
     *   SET RIGHT TO USER
     *
     * send HTTP request to get User Roles
     * save UserRoles to the state
     *
     * @function
     *
     */
    setRightOfUser() {
        var self = this;
        let currentselected = this.props.selected;
        if (this) {
            apiService.fetchRightIdsForRoles(currentselected).then(function (roleRightResponse) {
                let roleRights = roleRightResponse == [] ? [] : roleRightResponse.data;
                self.setState({
                    roleRights: roleRights
                });

                return roleRights; // pass the data as promise to next then block
            }).then(function (userRightResponse) {
                let roleRightIds = [];
                userRightResponse.map((value, index) => {
                    roleRightIds.push(value.id_right);
                });
                /** SETTING THE NEW RIGHTS IN STATE **/
                apiService.fetchRightObjectsFOrId(roleRightIds).then(function (rightResponse) {

                    let rightObjects = rightResponse == [] ? rightResponse : rightResponse.data;
                    self.setState({
                        rightObjects: rightObjects
                    })
                })
            }).catch(err => {
                console.log(err);
            });
        }
    }

    /**
     * RENDERING USER RIGHT BOX
     *
     * @returns {null|*}
     */
    render() {

        if (this) {
            const rights = this.state.rightObjects;
            return (
                <div className="diusri" >
                    <ul>
                        {rights.map((value, index) => {
                            let url = "/right/" + value.id;

                            return <LinkAnyFieldButton to={url} key={value.id}>
                                <Chip label={value.name}></Chip>
                            </LinkAnyFieldButton>
                        })
                        }
                    </ul>
                </div>
            )
        }
        return null;
    }
}

export default UserRightBox;
