
import React,{ Fragment }  from 'react';
import { Pagination} from 'react-admin';

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
    Filter
} from 'react-admin';
import {RoleListBox} from './comp/rolelistbox';
import './comp/comp.css'
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { useTranslate } from 'react-admin';
import UserShow from "./usershow3.js";

const ProfilPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

require('react-dom');
window.React2 = require('react');
console.log("-----compare------")
console.log(window.React1 === window.React2);

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const User_allFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="surname" alwaysOn />
        <TextInput label="Surname" source="surname" defaultValue="Surname" />
        <TextInput label="Givenname" source="givenname" defaultValue="Givenname" />
        <TextInput label="AddressID" source="addressid" />
        <TextInput label="Termconfiguration" source="termconfiguration" defaultValue="Termconfiguration" />
    </Filter>
);
/**
 *
 * editing specified user.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const User_allEdit = (props) => (

    <Edit  {...props}>
        <SimpleForm >
            <div style={{width: '100%'}} >
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" >
                    <Box width="40%" bgcolor="white.300">
                        <TextInput disabled source="id"/>
                        <TextField disabled source="surname"  />
                        <TextField source="givenname"/>
                        <TextField source="termconfiguration"/>
                    </Box>
                    <Box width="60%" bgcolor="white.300">
                        <RoleListBox id_user={props.id}/>
                    </Box>
                </Box>

            </div>

        </SimpleForm>
    </Edit>
);


/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const User_allList = (props) => (

    <Fragment>
        <List {...props} pagination={<ProfilPagination />} filters={<User_allFilter />}>
            <Datagrid rowClick="expand" expand={<UserShow />}>
                <TextField label="AddressId" source="id"/>
                <TextField source="anrede"/>
                <TextField source="surname"/>
                <TextField source="givenname"/>
                <TextField source="termconfiguration"/>
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
    </Fragment>

);
