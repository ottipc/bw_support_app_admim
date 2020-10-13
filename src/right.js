import React, {Fragment} from 'react';
import {Create, Edit, SimpleForm, TextInput, List, Datagrid, TextField, EditButton,} from 'react-admin';
import {Button, Drawer} from "@material-ui/core";
import {MyEdit} from "./myEdit";
import Box from "@material-ui/core/Box";


/**
 *
 * creating a new right
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const  RightCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);


/**
 *
 * editing a specified right.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const RightEdit = props => (
    <MyEdit {...props}>
        <SimpleForm>
            <div style={{width: '100%'}}>
            <Box className="boxcontainer" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
            <TextInput source="name" />
            </Box>
            </div>
        </SimpleForm>
    </MyEdit>
);

/**
 *
 * showing list of the right.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const RightList = (props) => (
    <React.Fragment>
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <EditButton />
            </Datagrid>
        </List>
    </React.Fragment>
);
