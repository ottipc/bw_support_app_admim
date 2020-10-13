import React from 'react'
import MaterialTable from 'material-table'
import {API_URL} from './api/dataProvider'




export class Tbl extends React.Component {





    render() {
        return (
            <div>

                <MaterialTable
                    columns={[
                        {title: 'Degree Code', field: 'degreecode'},
                        {title: 'Degree', field: 'degree'},
                        {title: 'University', field: 'university'},
                        {title: ' ImmatDate', field: 'immatdate', type: "date", dateSetting: {locale: "de-DE"}},
                        {title: 'ExmatDate', field: 'exmatdate', type: "date", dateSetting: {locale: "de-DE"}},
                        {title: 'ExamtReason', field: 'exmatreason'},
                        {title: 'Capr_Nameeng', field: 'capr_nameeng'},
                        {title: ' Capr_DegreeShort', field: 'capr_degreeshort'},
                        {title: ' Is Notifiable', field: 'isnotifiable'},
                    ]}
                    data={query =>
                        new Promise((resolve, rejec) => {
                            let url = API_URL + '/studies?addressid=eq.' + this.props.addressid

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
                            letterSpacing: 0.5
                        },
                        toolbar: false,
                        emptyRowsWhenPaging: false,
                    }}
                />
            </div>
        )
    }

}
