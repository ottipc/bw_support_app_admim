import {fetchUtils} from 'react-admin';
import postgrestRestProvider from "@raphiniert/ra-data-postgrest";
require('dotenv').config();

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;


/**
 *
 * dataProvider configurations
 *  Authorization Token for the API
 *
 * @param url
 * @param options
 * @returns {Promise<{status: number; headers: Headers; body: string; json: any}>}
 */
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }

    //options.headers.set('Authorization', process.env.REACT_APP_API_KEY);
    return fetchUtils.fetchJson(url, options);

};


/**
 * send the Authorization Token in header
 * @type {DataProvider}
 */

console.log("-----------------------");
console.log(API_URL);
console.log("-----------------------");

const dataProvider = postgrestRestProvider(API_URL, httpClient);

function buildAndQuery(prop, params) {
    let querystring = "";
    for (prop in params.filter) {
        console.log("PROPERTY : " + prop);
        console.log( "params  " + params.filter[prop]);
        querystring = "&" + prop + "=ilike." + params.filter[prop] + "%";
        if (prop === 'addressid' || 'id_role' || 'id_right' || 'id_user'){
             querystring = "&" + prop + "=eq." + params.filter[prop] ;
        }
    }
    return querystring;
}

/**
 *
 * Extending the Dataprovider Functionality to build OR Queries on the Api.
 * The function takes a list of params and their keys to query the specified table with an or.
 *
 * @type {{[p: string]: any, deleteMany: (resource: string, params: DeleteManyParams) => Promise<DeleteManyResult>, updateMany: (resource: string, params: UpdateManyParams) => Promise<UpdateManyResult>, getList: (resource: string, params: GetListParams) => Promise<GetListResult>, getMany: (resource: string, params: GetManyParams) => Promise<GetManyResult>, getManyReference: (resource: string, params: GetManyReferenceParams) => Promise<GetManyReferenceResult>, getOne: (resource: string, params: GetOneParams) => Promise<GetOneResult>, update: (resource: string, params: UpdateParams) => Promise<UpdateResult>, create: (resource: string, params: CreateParams) => Promise<CreateResult>, getManyOr: (function(*, *): Promise<{data: *}>), delete: (resource: string, params: DeleteParams) => Promise<DeleteResult>}}
 */
const myDataProvider = {
    ...dataProvider,
    /*getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${API_URL}/${resource}?${JSON.stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
//            data: json,
            data: json.map(resource => ({ ...resource, id: resource.addressid }) ),
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },*/

};

export default myDataProvider
