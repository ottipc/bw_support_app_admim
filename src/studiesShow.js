import {makeStyles} from "@material-ui/core/styles";
import {ReferenceField, useShowController, useTranslate} from "react-admin";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {AccountsInfo} from "./accountsInfo";
import Paper from "@material-ui/core/Paper";
import {Tbl} from "./studiesTable";
import * as React from "react";

const useStyles = makeStyles({
    container: {minWidth: '35em', marginLeft: '1em'},
    rightAlignedCell: {textAlign: 'right'},
    boldCell: {fontWeight: 'bold'},
    root: {width: 1400, margin: '10px',},
    spacer: {height: 20},
});
const StudiesShow = (props) => {
    const {record} = useShowController(props);
    const classes = useStyles();
    const translate = useTranslate();
    if (!record) return null;


    return (
        <Card className={classes.root}>
            <CardContent className='userinfo'>

                <div style={{width: '100%'}} className="rowg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} container alignContent="flex-end">

                                <Typography className='userdata'>
                                    <Table style={{width: '100%'}}>
                                        <TableHead>

                                            <TableRow>
                                                <TableCell style={{width: '30%'}} >{translate('resources.studies.fields.university')}</TableCell>
                                                <TableCell >{translate('resources.studies.fields.isnotifiable')}</TableCell>
                                                <TableCell >{translate('resources.studies.fields.capr_nameeng')}</TableCell>
                                                <TableCell >{translate('resources.studies.fields.capr_degreeshort')}</TableCell>
                                            </TableRow>

                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell >{record.university}</TableCell>


                                                <TableCell >{record.isnotifiable}</TableCell>

                                                <TableCell >{record.capr_nameeng}</TableCell>

                                                <TableCell>{record.capr_degreeshort}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Typography>


                        </Grid>

                    </Grid>
                </div>
            </CardContent>
        </Card>
    );

};

export default StudiesShow;
