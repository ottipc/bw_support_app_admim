import React from 'react';
import {Admin, Resource, EditGuesser, ShowGuesser} from 'react-admin';
import {RoleList, RoleCreate, RoleEdit} from './role';
import {User_allList, User_allEdit} from './user_all';
import {RightList, RightCreate, RightEdit} from './right';
import myDataProvider from "./api/dataProvider";
import mySvg from './logo.svg'
import langProvider from "./lang/langProvider";
import CustomLayout from "./CustomLayout";
import {QuestionList, QuestionEdit, QuestionCreate} from "./questions";
import {StudiumEdit, StudiumList} from "./studies";
import {AccountList, AccountEdit} from "./accounts";
import {StaffEdit, StaffList, StaffCreate} from "./staff";


require('dotenv').config();
/**
 *
 * REACT ADMIN AND ALL REQUIRED COMPONENT
 *
 * @returns {*}
 * @constructor
 */

const App = () => <div style={{width: '95%'}}>

    <div style={{width: '100%'}}>
        <Admin dataProvider={myDataProvider}
               i18nProvider={langProvider}
               layout={CustomLayout}>
            <Resource name="question" create={QuestionCreate}  list={QuestionList} edit={QuestionEdit}/>
        </Admin>
        <div className='footer'>
            <img src={mySvg} alt={mySvg} width={100} height={100}/>
        </div>
    </div>
</div>;

export default App

/*<div className="chat" style={{width: '19%'}}>
    <ThemedExample/>
    <Calender/>
    </div>*/

