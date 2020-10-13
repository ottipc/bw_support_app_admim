import React from 'react';
import {FC} from 'react';
import classnames from 'classnames';
import Chip from '@material-ui/core/Chip';
import LinkAnyFieldButton from "./linkAnyFieldButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link, useTranslate, useQueryWithStore, ReferenceField, Datagrid} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';
import apiService from "../api/apiService";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import dataProvider from '../api/dataProvider';
import {useShowController} from 'react-admin';
import axios from 'axios';
import {API_URL} from '../api/dataProvider'
import {DataManager, Query} from "@syncfusion/ej2-data";
import {element} from "prop-types";
import UserShow from "../usershow3";
import {withStyles} from '@material-ui/core/styles';

var exmatreason = null;
var degreecode = null;
var degree = null;
var university = null;
var capr_nameeng = null;
var capr_degreeshort = null;
var isnotifiable = null;
var immatdate = null;
var exmatdate = null;
var rwte_name_data = null;
var rwte_name = null;
var term_type_data = null;
var term_type = null;
var i = null;
var j = null;
var k = null;
var test = null;
export var username = null;
export var email = null;
export var status = null;
export var personid = null;
export var expire = null;


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


export class Tbl extends React.Component {

    constructor(props) {
        super(props);
        let aid = props.addressid;
        console.log("addressid  " + aid)
        this.state = {
            sdata: [],
            adata: []

        };

        axios.get(API_URL + '/studies?addressid=eq.' + aid)

            .then(res => {

                const sdata = res.data;
                this.setState({sdata: res.data});
                console.log("studie data")
                console.log(sdata)


                exmatreason = sdata.map(function (sdata) {
                    return <li>{sdata.exmatreason}</li>
                });
                degreecode = sdata.map(function (sdata) {
                    return <li>{sdata.degreecode}</li>
                });
                degree = sdata.map(function (sdata) {
                    return <li>{sdata.degree}</li>
                });
                university = sdata.map(function (sdata) {
                    return <li>{sdata.university}</li>
                });
                capr_nameeng = sdata.map(function (sdata) {
                    return <li>{sdata.capr_nameeng}</li>
                });
                capr_degreeshort = sdata.map(function (sdata) {
                    return sdata.capr_degreeshort
                });
                isnotifiable = sdata.map(function (sdata) {

                    return <li>{sdata.isnotifiable}</li>
                });
                exmatreason = sdata.map(function (sdata) {
                    return <li> {sdata.exmatreason}</li>
                });
                exmatreason = sdata.map(function (sdata) {
                    return <li> {sdata.exmatreason} </li>
                });
                immatdate = sdata.map(function (sdata) {
                    return <li> {sdata.immatdate}</li>
                });

                exmatdate = sdata.map(function (sdata) {
                    return <li> {sdata.exmatdate} </li>
                });

            });


        axios.get(API_URL + '/accounts?addressid=eq.' + aid)
            .then(response => {

                const adata = response.data;
                this.setState({adata: response.data});
                console.log("accounts data");
                console.log(adata);


                username = adata.map(function (adata) {
                    return (adata.username)
                });
                email = adata.map(function (adata) {
                    return (adata.email)
                });
                status = adata.map(function (adata) {
                    return (adata.status)
                });
                personid = adata.map(function (adata) {
                    return (adata.personid)
                });
                expire = adata.map(function (adata) {
                    return (adata.expire)
                });


            });


        /*
         // get the Data from csph

         axios.get(API_URL + '/studie?select=csph(csph_rwte_name,csph_type)&addressid=eq.' + aid)
              .then(response => {

                  const cdata = response.data;
                  this.setState({cdata: response.data});
                  console.log("csph data")
                  console.log(cdata)
                  rwte_name_data = cdata.map(function (cdata) {
                      return cdata.csph
                  });
                  term_type_data = cdata.map(function (cdata) {
                      return cdata.csph
                  });
                  for (i = 0; i < rwte_name_data.length; i++) {
                      for (j = 0; j < rwte_name_data[i].length; j++) {

                          rwte_name = rwte_name_data[i][j].csph_rwte_name

                          term_type = term_type_data[i][j].csph_type
                          console.log("**********************")
                          console.log("term_type  " + [i]+ " "+[j])
                          console.log(term_type)
                          console.log(rwte_name)
                      }
                  }


              });*/

    };


    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            degreecode
                        </StyledTableCell>
                        <StyledTableCell>
                            degree
                        </StyledTableCell>
                        <StyledTableCell>
                            university
                        </StyledTableCell>
                        <StyledTableCell>
                            immatdate
                        </StyledTableCell>
                        <StyledTableCell>
                            exmatdate
                        </StyledTableCell>
                        <StyledTableCell>
                            exmatreason
                        </StyledTableCell>
                        <StyledTableCell>
                            capr_nameeng
                        </StyledTableCell>
                        <StyledTableCell>
                            capr_degreeshort
                        </StyledTableCell>
                        <StyledTableCell>
                            isnotifiable
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow className="dddd">
                        <TableCell>
                            {degreecode}
                        </TableCell>
                        <TableCell>
                            {degree}
                        </TableCell>
                        <TableCell>
                            {university}
                        </TableCell>
                        <TableCell>
                            {immatdate}
                        </TableCell>
                        <TableCell>
                            {exmatdate}
                        </TableCell>
                        <TableCell>
                            {exmatreason}
                        </TableCell>
                        <TableCell>
                            {capr_nameeng}
                        </TableCell>
                        <TableCell>
                            {capr_degreeshort}
                        </TableCell>
                        <TableCell>
                            {isnotifiable}
                        </TableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>


        )
    }
}






