import React from 'react';
import {Button, Drawer} from '@material-ui/core';
import {
    ChipField,
    Create,
    Datagrid,
    Edit,
    EditButton,
    EmailField,
    List,
    ReferenceField,
    ReferenceManyField,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
    Show,
    SimpleShowLayout,
    BooleanField,
    BooleanInput,
} from 'react-admin';
import {RoleListBox} from './comp/rolelistbox';
import './comp/comp.css'
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { useTranslate } from 'react-admin';



require('react-dom');
window.React2 = require('react');
console.log("-----compare------")
console.log(window.React1 === window.React2);
/**
 *
 * function for checking if all required fields are filled
 *
 * @function
 *
 * @param values
 */
const validateUserCreation = (values) => {
    //alert("Validating....")
    const errors = {};
    if (!values.name) {
        errors.name = ['The name is required'];
    }

    if (!values.email) {
        errors.email = ['The Email is required'];
    }
    //if (!validateEmail(values.email)) {
    //    errors.email = ['The Email is wrong format'];
    //}
    return errors
};


/**
 *
 *  creating a new user.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateUserCreation}>
            <TextInput required source="name"/>
            <TextInput required label="Email" source="email" type="email"/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Create>

);


/**
 *
 * editing specified user.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
/*export const UserEdit = (props) => (

    <Edit  {...props}>
        <SimpleForm >
            <div style={{width: '100%'}} >
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" >
                    <Box width="40%" bgcolor="white.300">
                        <TextInput disabled source="id"/>
                        <TextInput source="name"  />
                        <TextInput label="Email" source="email" type="email"/>
                        <BooleanInput source="activated"/>
                    </Box>
                    <Box width="60%" bgcolor="white.300">
                        <RoleListBox id_user={props.id}/>
                    </Box>
                </Box>
            </div>

        </SimpleForm>
    </Edit>
);*/


/**
 *
 *  creating a new user in Popup dialog
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function CreateDrawer(props) {

    const [state, setState] = React.useState({
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    return (
        <div>
            {['right', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" color="primary" data-class="MuiChip-label" data-animation="true"
                            data-toggle="tooltip" title="Klick to Quick Create user"
                            onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <UserCreate {...props}/>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */


/*export const UserList = (props) => (

    <React.Fragment>
        {CreateDrawer(props)}
        <List {...props}
              basePath={"/user"}
              resource={"user"}
        >

            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField source="email"/>
                <BooleanField source="activated"/>
                <ReferenceManyField label='Roles' reference="user_role" target="id_user">
                    <SingleFieldList linkType={false}>
                        <ReferenceField source="id_role" reference="role">
                            <ChipField source="name"/>
                        </ReferenceField>
                    </SingleFieldList>
                </ReferenceManyField>
                <EditButton/>
            </Datagrid>
        </List>
    </React.Fragment>

);*/



export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField disabled source="id"/>
            <TextField source="name"/>
            <TextField source="email"/>
            <BooleanField source="activated"/>
        </SimpleShowLayout>
    </Show>

);



