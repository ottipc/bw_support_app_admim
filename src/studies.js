import React,{ Fragment }  from 'react';
import {DateField, EditButton, Pagination, SearchInput } from 'react-admin';
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
import StudiesShow from "./studiesShow";
import Box from "@material-ui/core/Box";
import {MyEdit} from "./myEdit";





const StudiesFilter = (props) => (
    <Filter {...props}>

        <SearchInput  source="addressid" alwaysOn />

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


export const StudiumEdit = (props) => (

    <MyEdit  {...props}>
        <SimpleForm >
            <div style={{width: '100%'}}>
            <Box className="boxcontainer" display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                <Box className="studiesbox" width="33%" bgcolor="white.300">
                        <TextInput label="resources.studies.fields.addressid" disabled source="addressid"/>
                        <TextInput label="resources.studies.fields.id" disabled source="id"/>
                        <TextInput label="resources.studies.fields.immatdate" disabled source="immatdate"  />
                        <TextInput label="resources.studies.fields.exmatdate" disabled source="exmatdate"/>
                </Box>
                <Box  className="studiesbox" width="33%" bgcolor="white.300">
                        <TextInput label="resources.studies.fields.exmatreason" disabled source="exmatreason"/>
                        <TextInput label="resources.studies.fields.degreecode" disabled source="degreecode"/>
                        <TextInput label="resources.studies.fields.degree" disabled source="degree"/>
                        <TextInput label="resources.studies.fields.university" disabled source="university"/>
                </Box>
                    <Box className="studiesbox" width="33%" bgcolor="white.300">
                        <TextInput label="resources.studies.fields.capr_nameeng" disabled source="capr_nameeng"/>
                        <TextInput label="resources.studies.fields.capr_degreeshort" disabled source="capr_degreeshort"/>
                        <TextInput label="resources.studies.fields.isnotifiable" disabled source="isnotifiable"/>
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


export const StudiumList = (props) => (

    <Fragment>
        <List {...props} filters={<StudiesFilter/>} >
          <Datagrid rowClick="expand" expand={ <StudiesShow />}>
              <TextField source="addressid"/>

              <DateField disabled source="immatdate" locales="de-DE" />
              <DateField disabled source="exmatdate" locales="de-DE"/>
              <TextField disabled source="exmatreason"/>
              <TextField disabled source="degreecode"/>
              <TextField disabled source="degree"/>

<EditButton/>
              </Datagrid>
        </List>
    </Fragment>

);
