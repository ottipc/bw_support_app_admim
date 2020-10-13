import React,{ Fragment }  from 'react';

import {
    ChipField,
    Datagrid,
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceManyField,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
    SearchInput,
    Filter,
    Pagination, Create
} from 'react-admin';
import {RoleListBox} from './comp/rolelistbox';
import './comp/comp.css'
import Box from "@material-ui/core/Box";
import UserShow from "./usershow3";
import {MyEdit} from "./myEdit";

const StaffPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;




const StaffFilter = (props) => (
    <Filter {...props}>
        <SearchInput  source="i" alwaysOn />

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
export const StaffEdit = (props) => (

    <MyEdit  {...props}>
        <SimpleForm >
            <div style={{width: '100%'}} >
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" >
                    <Box width="40%" bgcolor="white.300">
                        <TextInput disabled source="id"/>
                        <TextInput source="salutation"  />
                        <TextInput source="surname"  />
                        <TextInput source="givenname"  />
                        <TextInput source="gender"  />
                    </Box>
                    <Box width="60%" bgcolor="white.300">
                        <RoleListBox id_user={props.id}/>
                    </Box>
                </Box>
            </div>

        </SimpleForm>
    </MyEdit>
);


/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */


export const StaffList = (props) => (




    <List {...props} pagination={<StaffPagination/>} filters={ <StaffFilter/> } sort={{ field: 'id', order: 'DESC' }}>

        <Datagrid rowClick="expand" expand={<UserShow/>}>
            <TextField label="ID" source="id"/>

            <TextField source="salutation"/>
            <TextField source="surname"/>
            <TextField source="givenname"/>
            <TextField source="gender" />
            <ReferenceManyField label='pos.role' reference="user_role" target="id_user">
                <SingleFieldList linkType={false}>
                    <ReferenceField source="id_role" reference="role">
                        <ChipField source="name"/>
                    </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>
            <EditButton/>
        </Datagrid>
    </List>


);


export const StaffCreate = props => (
    <Create {...props}>
        <SimpleForm >

            <TextInput required source="salutation"/>
            <TextInput required  source="surname" />
            <TextInput required source="givenname"/>
            <TextInput required  source="gender" />
        </SimpleForm>
    </Create>

);
