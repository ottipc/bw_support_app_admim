
#Instant ID Manager

Postgresql, PostgREST, React GUI
--------
###introduction
this is a Web application in the field of identity management.
The admin will have the option to assign different roles to users, which in turn each include rights that can also be assigned.
--------
##React
**react** is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

these are some tasks that react does:

    * Scaling to many files and components.
	* Using third-party libraries from npm.
	* Detecting common mistakes early.
	* Live-editing CSS and JS in development.
	* Optimizing the output for production.
	
----------
###Create a New React App

the Admin is based on marmelab react-admin.

Docs : https://github.com/marmelab/react-admin

    npx create-react-app instaidm
    cd instaidm
    
-------
####Available Scripts
In the project directory, you can run:

###`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

###`npm test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

###`npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.

###`npm eject`

**Note**: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---------
##REST API

The Rest Api is based on POSTGREST.

Docs : http://postgrest.org/en/v7.0.0/

**PostgREST** is a standalone web server that turns your PostgreSQL database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations.


The ID Manager have five entities :

* http://instaidm.cc.private.ssystems.de:3000/user
* http://instaidm.cc.private.ssystems.de:3000/user_role
* http://instaidm.cc.private.ssystems.de:3000/role
* http://instaidm.cc.private.ssystems.de:3000/role_rechte
* http://instaidm.cc.private.ssystems.de:3000/rechte

--------


***Components***
----------

**`src/App.js`**

### 1. App

REACT ADMIN AND ALL REQUIRED COMPONENT

@returns {*}

@constructor   

-----
**`src/api/apiService.js`**

### 1. ApiService

@param props

@returns {*}

@constructor   



### 2. myApiService

 
get the right that belong to specified role

@type {{deleteUserRole: myApiService.deleteUserRole, fetchRightObjectsFOrId: (function(*=): (*|Promise<unknown>)), fetchAllRights: (function(*, *): Promise<GetListResult>), createUserRole: myApiService.createUserRole, fetchRightIdsForRoles: (function(*=): (*|Promise<unknown>)), fetchAllRoleObjects: (function(): Promise<GetListResult>), fetchRoleListForUser: (function(string): Promise<GetListResult>)}}
 
 
### 3. fetchRightObjectsFOrId


Insert//assign a relation of RoleRight.

@param userRightIds

@returns {*|Promise<unknown>}
     
 
### 4. fetchAllRights


get all rights from the Rest API.

@param resource

@param params

@returns {Promise<GetListResult>}
 
 
### 5. fetchAllRoleObjects

getting all Roles from the Rest API.


@returns {Promise<GetListResult>}


### 6. fetchRoleListForUser


Getting all Roles for a specified user from the Rest API.

@param userId

@returns {Promise<GetListResult>}


### 7. createUserRole

assign roles to User post request in the REST API.


@param payload


### 8. deleteUserRole

remove roles from User delete request from the REST API

@param userRoleId
     
     
-----
**`src/api/dataProvider.js`**

### 1. httpClient

dataProvider configurations.
Authorization Token for the API.


@param url

@param options

@returns {Promise<{status: number; headers: Headers; body: string; json: any}>}


### 2. dataProvider


Create the dataProvider.
add Authorization Token to header.
 
@type {DataProvider}

### 3. myDataProvider


Extending the Data provider Functionality to build OR Queries on the Api.

The function takes a list of params and their keys to query the specified table with an or.
 
@type {{[p: string]: any, deleteMany: (resource: string, params: DeleteManyParams) => Promise<DeleteManyResult>, updateMany: (resource: string, params: UpdateManyParams) => Promise<UpdateManyResult>, getList: (resource: string, params: GetListParams) => Promise<GetListResult>, getMany: (resource: string, params: GetManyParams) => Promise<GetManyResult>, getManyReference: (resource: string, params: GetManyReferenceParams) => Promise<GetManyReferenceResult>, getOne: (resource: string, params: GetOneParams) => Promise<GetOneResult>, update: (resource: string, params: UpdateParams) => Promise<UpdateResult>, create: (resource: string, params: CreateParams) => Promise<CreateResult>, getManyOr: (function(*, *): Promise<{data: *}>), delete: (resource: string, params: DeleteParams) => Promise<DeleteResult>}}
 

-----
**`src/comp/linkAnyFieldButton.js`**

this component warps around any field and make it link

### 1.styles

Add a custom style
 
@type {{link: {cursor: string, "& *": {cursor: string}}}}


### 2. sanitizeRestClasses

 @param link
 
 @param rest
 
 @returns {*}
 
sanitizeRestProps
### 3. sanitizeRestProps


@param classes

@param to

@param relative

@param disabled

@param history

@param location

@param match

@param staticContext

@param rest

@returns {*}

### 4. LinkAnyFieldButton


Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
basePath|string|no||
children|any|no||
record|object|no||
classes|object|no||
to|string|no|&lt;See the source code&gt;|
relative|bool|no||
disabled|union|no||
match|object|no||


### 5. enhance


add props: history, location, match, staticContext.

add style

@param props
@param nextProps


-----
**`src/comp/Notification.js`**

### 1. createNotification

Display a Notification in te React App as Popup Dialog


@param type

@param title

@param message



-----
**`src/comp/rightlistbox.js`**

### 1. RightListBox

component for creating role-right-list

@component   


### 2. constructor


Construct right list box

@param props


### 3. componentDidMount


invoke just once onload or reload

@function


### 4. getroleRightsToState
 
 
send HTTP request to get Role Rights

save roleRights to the state


@function
 
 
### 5. fetchRightIdsForRole
 
function for getting the Right for a specified Role

@returns {*}

@function


### 6. setAllRightsToState


send HTTP request to get All Rights

save AllRights to the state

@function


### 7. updateRights

function for editing role-right-box

add a new right to a role

remove a right from a role

@param e

@function


### 8. onChange

invoke whenever there is a change

@param selected

@function


### 9. render

Rendering Role Right box

@returns {*}

-----
**`src/comp/rolelistbox.js`**



### 1. useStyles

Add a custom style

@type {((props?: any) => ClassNameMap<string>) | *}

@component   


### 2. options


standard value for user role box
 
@type {*[]}


### 3. RoleListBox

Component for setting user-role-box

be shown in user.js

@component   


### 4. constructor

CONSTRUCT user-role-box

@param props

@constructor


### 5. componentDidMount


invoke JUST ONCE onload or reload

@function

### 6. getUserRolesToState


send HTTP request to get User Roles

save UserRoles to the state

@function

### 7. setAllRolesToState

send HTTP request to get All Roles

save AllRoles to the state

@function


### 8. updateRoles
function for editing user-role-box

create a new role to user

**POST** http://instaidm.cc.private.ssystems.de:3000/user_role

remove a role from user

**DELETE** http://instaidm.cc.private.ssystems.de:3000/user_role

@param event

@function

### 9. onChange

invoke whenever there is a change

@param selected

@function


### 10. changingRightsChild

@param text

@function

### 11. render

rendering role list box
@returns {*}


-----
**`src/comp/userrightlistbox.js`**




### 1. UserRightBox

Component for showing  RIGHTS in  user role box

be shown in user.js

@component   


### 2. constructor

CONSTRUCT USER-RIGHT BOX
  
@param props

@constructor


### 3. componentDidUpdate

invoke WHENEVER THERE IS AN UPDATE or change in userrightlistbox

@param prevProps

@param prevState

### 4. componentDidMount


invoke JUST ONCE onload or reload

@function


### 5. getDerivedStateFromProps


invoke whenever the component receives new props.

@param props

@param state

@returns {null|{cachedSomeProp: *}}

### 6. setRightOfUser

SET RIGHT TO USER

send HTTP request to get User Roles

save UserRoles to the state

@function

### 7. render

RENDERING USER RIGHT BOX

@returns {null|*}



-----
**src/right.js**

### 1. CreateRightDrawer

creating a new right in Popup dialog

@param props
@returns {*}
@constructor   




### 2. RightCreate

creating a new right

post requst in the REST API

**POST** instaidm.cc.private.ssystems.de:3000/rechte


@param props

@returns {*}

@constructor   




### 3. RightEdit

editing a specified right.

update/delete request

**PATCH** instaidm.cc.private.ssystems.de:3000/rechte
		
**DELETE** instaidm.cc.private.ssystems.de:3000/rechte


@param props

@returns {*}

@constructor   




### 4. RightList

showing list of the right.

Get request from the REST API 

**GET** instaidm.cc.private.ssystems.de:3000/rechte

@param props

@returns {*}

@constructor   




-----
**src/role.js**

### 1. RoleCreate

creating a new role.

post requst in the REST API

**POST** instaidm.cc.private.ssystems.de:3000/role

@param props

@returns {*}

@constructor   




### 2. RoleList

showing list of the role.

Get request from the REST API 

**GET** instaidm.cc.private.ssystems.de:3000/role

@param props

@returns {*}

@constructor   




### 3. RoleEdit

editing a specified role.

update/delete role request

**PATCH** instaidm.cc.private.ssystems.de:3000/role
		
**DELETE** instaidm.cc.private.ssystems.de:3000/role 

assign rights 
		
**POST** instaidm.cc.private.ssystems.de:3000/role_rechte 

@param props

@returns {*}

@constructor   




-----
**src/user.js**

### 1. UserCreate

creating a new user.

post requst in the REST API

**POST** instaidm.cc.private.ssystems.de:3000/user


@param 

@returns {*}

@constructor   




### 2. UserEdit

editing specified user.

update/delete role request
	
**PATCH** instaidm.cc.private.ssystems.de:3000/user
		
**DELETE** instaidm.cc.private.ssystems.de:3000/role 

assign roles 

**POST** instaidm.cc.private.ssystems.de:3000/user_role

@param props

@returns {*}

@constructor   




### 3. CreateDrawer

creating a new user in Popup dialog

@param props

@returns {*}

@constructor   




### 4. UserList

showing list of the user

Get request from the REST API 

**GET** instaidm.cc.private.ssystems.de:3000/user

@param props

@returns {*}

@constructor   




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
























<VirtualHost *:80>
ServerName o.ssystems.de/
DocumentRoot "/var/www/bw_support_app_admim/build"

 <Directory "/var/www/bw_support_app_admim/build">

Order allow,deny  
Allow from all  

</Directory>

ProxyPass "/api" "http://o.ssystems.de:3351"
ProxyPassReverse "/api" "http://o.ssystems.de:3351"


Alias /images "/var/www/pics"
<Directory "/var/www/pics">
Options +Indexes
AllowOverride None
Order allow,deny  
Allow from all  
</Directory>
</VirtualHost>




http://o.ssystems.de/api/question




http://o.ssystems.de/images/


~                    






