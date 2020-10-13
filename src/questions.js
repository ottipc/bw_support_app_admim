import React, {cloneElement, useState} from 'react';
import {
    ChipField,
    Datagrid,
    Create,
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceManyField,
    SimpleForm,
    ImageInput,
    ImageField,
    SelectInput,
    SingleFieldList,
    TextField,
    TextInput,
    SearchInput,
    Filter,
    Pagination, Button

} from 'react-admin';
import './comp/comp.css'
import Box from "@material-ui/core/Box";
import FileUpload from "./comp/FileUpload";
import {MyEdit} from "./myEdit";




const QuestionPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

const QuestionFilter = (props) => (
    <Filter {...props}>

        <SearchInput source="name" alwaysOn/>
        <SearchInput source="detail" alwaysOn/>
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

/*
const WrappedSimpleForm = ({save, ...rest}) => {
    const mySave = () => {alert("Alles cscheisse")};
    return (<SimpleForm save={mySave} {...rest} />);
}
*/


export const QuestionCreate = (props) => (
    <Create title="Create a Question" {...props}>
        <SimpleForm>
            <TextInput source="text" />
            <TextInput source="detail" options={{ multiLine: true }} />
            <SelectInput source="language" choices={[
                { id: 'DE', name: 'German' },
                { id: 'EN', name: 'English' }
            ]} />
        </SimpleForm>
    </Create>
);



export const QuestionEdit = (props) => (

    <MyEdit  {...props}>
        <SimpleForm>
            <div style={{width: '100%'}}>
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                    <Box width="40%" bgcolor="white.300">
                        <TextInput label="ID" disabled source="id"/>
                        <TextInput label="Text" source="text"/>
                        <TextInput label="Detail"  source="detail"/>
                        <SelectInput source="language" choices={[
                            { id: 'DE', name: 'German' },
                            { id: 'EN', name: 'English' }
                        ]} />
                        <FileUpload {...props}/>
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


export const QuestionList = (props) => (
        <List
            {...props}
            pagination={<QuestionPagination/>}
            filters={ <QuestionFilter /> }
            sort={{field: 'id', order: 'DESC'}}>

            <Datagrid>
                <TextField label="ID" source="id"/>
                <TextField source="text"/>
                <TextField source="language"/>
                <TextField source="detail"/>
                <EditButton/>
            </Datagrid>
        </List>


    );

