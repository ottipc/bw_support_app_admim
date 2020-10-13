import dataProvider from '../api/dataProvider';
import React from 'react';
import axios from "axios";

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const ApiService = (props) => {
    const value = {};

    return (
        <ApiService.Provider value={value}>
            {props.children}
        </ApiService.Provider>
    );
};
/**
 *
 *  get the right that belong to specified role
 *
 * @type {{deleteUserRole: myApiService.deleteUserRole, fetchRightObjectsFOrId: (function(*=): (*|Promise<unknown>)), fetchAllRights: (function(*, *): Promise<GetListResult>), createUserRole: myApiService.createUserRole, fetchRightIdsForRoles: (function(*=): (*|Promise<unknown>)), fetchAllRoleObjects: (function(): Promise<GetListResult>), fetchRoleListForUser: (function(string): Promise<GetListResult>)}}
 */

const myApiService = {
    fetchRightIdsForRoles: function (roleIds) {
        return dataProvider.getManyOr('role_right', {
            id_role: roleIds
        });
    },
    /**
     *
     * Insert//assign a relation of RoleRight.
     *
     * @param userRightIds
     * @returns {*|Promise<unknown>}
     */
    fetchRightObjectsFOrId: function (userRightIds) {
        return dataProvider.getManyOr('right', {
            id: userRightIds
        });
    },

    uploadPic: function (formData, filename, config, question_id) {
        axios.post("http://o.ssystems.de:8079/uploadFile?name=" + filename, formData, config).then((response) => {
            console.log("drin");
            console.log(response);
            console.log("File :" + filename)
            //let data = {question_id : };
            console.log("Create Entry To file : " + filename)
            console.log("Question ID :" + question_id)

            return dataProvider.create('files', {data: {"question_id" : question_id, "picture_path" : filename}})
                .then(response => {
                    // success side effects go here
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        })
    },


   /* fetchAllUserObjects: function () {
        return dataProvider.getList('user', {
            pagination: {
                page: 1,
                perPage: 20
            },
            sort: {
                field: 'name',
                order: 'asc'
            },
            filter: {},
        })
    },
*/



    /**
     *  Getting all Roles for a specified user.
     *
     * @param userId
     * @returns {Promise<GetListResult>}
     */
    fetchRoleListForUser: function (userId) {
        return dataProvider.getList('user_role', {
            pagination: {
                page: 1,
                perPage: 50
            },
            sort: {
                field: 'id',
                order: 'asc'
            },
            filter: {
                id_user: userId
            },
        });
    },

    /**
     * assign roles to User
     *
     * @param payload
     */
    createPicInDB: function (payload) {
        dataProvider
            .create('files', {data: payload})
            .then(response => {
                // success side effects go here
            })
            .catch(error => {
                console.log(error);
            });
    },




    createUserRole: function (payload) {
        dataProvider
            .create('user_role', {data: payload})
            .then(response => {
                // success side effects go here
            })
            .catch(error => {
                console.log(error);
            });
    },
    /**
     * remove roles from User
     *
     * @param userRoleId
     */
    deleteUserRole: function (userRoleId) {
        dataProvider
            .delete('user_role', {id: userRoleId})
            .then(response => {
                // success side effects go here
            })
            .catch(error => {
                console.log(error);
            });
    }
};


export default myApiService
