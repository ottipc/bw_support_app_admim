import {API_URL} from "./api/dataProvider";
import React from "react";
import MaterialTable from "material-table";




export class AccountsInfo extends React.Component {


    render() {


            return (


                <div>
                    <MaterialTable
                        columns={[
                            {title: ' Person ID', field: 'personid'},
                            {title: 'User Name', field: 'username'},
                            {title: 'Email', field: 'email'},
                            {title: 'Status', field: 'status'},
                            {title: 'Expire', field: 'expire'},
                        ]}
                        data={query =>
                            new Promise((resolve, reject) => {
                                let url = API_URL + '/accounts?addressid=eq.' + this.props.addressid

                                fetch(url)
                                    .then(response => response.json())
                                    .then(result => {
                                        console.log("result.data");
                                        console.log(result);
                                        resolve({
                                            data: result,
                                        })

                                    })
                            })
                        }


                        options={{
                            search: false,
                            showTitle: false,
                            paging: false,
                            headerStyle: {
                                backgroundColor: "black",
                                color: "white",
                                fontSize: 12,


                            },
                            rowStyle: {
                                fontSize: 13,
                                height: 20,
                                padding: 0,
                                margin: 0,
                                letterSpacing: 0.5,


                            },
                            toolbar: false,
                            emptyRowsWhenPaging: false,
                        }}
                    />

                </div>
            )


    }

}

