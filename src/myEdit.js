import {useEditController} from "react-admin";
import React, {cloneElement} from "react";

export const MyEdit = props => {
    const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
        loaded, // boolean that is false until the record is available
        loading, // boolean that is true on mount, and false once the record was fetched
        record, // record fetched via dataProvider.getOne() based on the id from the location
        redirect, // the default redirection route. Defaults to 'list'
        resource, // the resource name, deduced from the location. e.g. 'posts'
        save, // the update callback, to be passed to the underlying form as submit handler
        saving, // boolean that becomes true when the dataProvider is called to update the record
        version, // integer used by the refresh feature
    } = useEditController(props);
    return (
        <div>

            {cloneElement(props.children, {
                basePath,
                record,
                redirect,
                resource,
                save,
                saving,
                version,
            })}
        </div>
    );
}
