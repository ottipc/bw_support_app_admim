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


    persistPicForQuestion: function (question_id, filename) {
        return dataProvider.update('user_question_answer', {
            id: question_id,
            data: { picture_path: "http://o.ssystems.de/images/" + filename},
            previousData: { title: "previous title" }
        });
    },


    fetchRightIdsForRoles: function (roleIds) {
        return dataProvider.getManyOr('role_right', {
            id_role: roleIds
        });
    },
    uploadPic: function (formData, filename, config, question_id) {
        axios.post("http://o.ssystems.de:8079/uploadFile?name=" + filename, formData, config).then((response) => {
            return dataProvider.update('question', {
                id: question_id,
                data: { picture_path: "http://o.ssystems.de/images/" + filename},
                previousData: { title: "previous title" }
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

    getPicturePath: function (id) {
        return dataProvider
            .getOne('question', {id: id})
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
