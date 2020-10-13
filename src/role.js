import React,{ Fragment }  from 'react';
import {ChipField, Create, Datagrid, NumberInput, Edit, EditButton, List, ReferenceField, ReferenceManyField, SimpleForm, SingleFieldList, TextField, TextInput} from 'react-admin';
import {RightListBox} from "./comp/rightlistbox";
import {MyEdit} from "./myEdit";

// in src/posts.js

/**
 *
 * creating a new role.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm >

            <TextInput source="name" />

        </SimpleForm>
    </Create>

);


/**
 *
 * showing list of the roles.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const RoleList = (props) => (
    <Fragment>
        <List {...props}>

            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <ReferenceManyField label="pos.right" reference="role_right" target="id_role">
                    <SingleFieldList linkType={false}>
                        <ReferenceField source="id_right" reference="right">
                            <ChipField source="name" />
                        </ReferenceField>
                    </SingleFieldList>
                </ReferenceManyField>
                <EditButton />
            </Datagrid>
        </List>
    </Fragment>
);

/**
 *
 * editing a specified role.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const RoleEdit = props => (
    <MyEdit {...props}>
        <SimpleForm >

            <TextInput source="name" />
            <RightListBox id_role={props.id}/>
        </SimpleForm>
    </MyEdit>

);



