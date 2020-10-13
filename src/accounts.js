import React  from 'react';

import {
    Edit,
    EditButton,
    List,
    SimpleForm,
    TextField,
    SingleFieldList,
    TextInput,
    Datagrid,
    ReferenceField, Filter, SearchInput, ReferenceManyField
} from 'react-admin';
import './comp/comp.css'
import {MyEdit} from "./myEdit";
import Box from "@material-ui/core/Box";




const AccFilter = (props) => (
    <Filter {...props}>

        <SearchInput  source="username@ilike" alwaysOn />

    </Filter>
);
/**
 *
 * editing specified Account.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const AccountEdit = (props) => (

    <MyEdit  {...props}>
        <SimpleForm >
            <div style={{width: '100%'}}>
            <Box className="boxcontainer" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                <Box className="studiesbox" width="33%" bgcolor="white.300">
            <TextInput disabled label="ID" source="id"/>
            <TextInput  source="addressid"/>
            <TextInput source="personid"/>
            <TextInput source="username"/>
                </Box>
                <Box className="studiesbox" width="33%" bgcolor="white.300">
            <TextInput source="email" />
            <TextInput source="status"/>
            <TextInput source="expire"/>
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


export const AccountList = (props) => (

    <List {...props} >
        <Datagrid>
            <TextField label="ID" source="id"/>

            <ReferenceManyField  label="AddressID" source= "addressid" reference="students" target="addressid" >
              <SingleFieldList >
                    <TextField source='addressid'/>
                </SingleFieldList>
            </ReferenceManyField >

                    <TextField source="personid"/>

            <TextField source="username"/>
            <TextField source="email" />
            <TextField source="status"/>
            <TextField source="expire"/>

            <EditButton/>
        </Datagrid>
    </List>

);
