import React,{ Fragment }  from 'react';
import { Pagination} from 'react-admin';
import {
    Datagrid,
    Edit,
    List,
    SimpleForm,
    TextField,
    TextInput,
    Filter
} from 'react-admin';
import './comp/comp.css'


require('react-dom');
window.React2 = require('react');
console.log("-----compare------")
console.log(window.React1 === window.React2);



/**
 *
 * editing specified user.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const CsphEdit = (props) => (

    <Edit  {...props}>
        <SimpleForm >
            <TextInput disabled source="csph_rwte_name"/>
            <TextField disabled source="csph_type"  />

        </SimpleForm>
    </Edit>
);


/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const CsphList = (props) => (

    <Fragment>
        <List {...props} >
            <Datagrid >
                <TextField  source="csph_rwte_name"/>
                <TextField  source="csph_type"  />
            </Datagrid>
        </List>
    </Fragment>

);
