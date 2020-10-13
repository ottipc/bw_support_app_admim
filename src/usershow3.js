import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {ReferenceField, useShowController,useTranslate } from 'react-admin';
import Paper from '@material-ui/core/Paper';
import {Tbl} from "./studiesTable"
import {AccountsInfo} from "./accountsInfo";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles({
    container: {minWidth: '35em', marginLeft: '1em'},
    rightAlignedCell: {textAlign: 'right'},
    boldCell: {fontWeight: 'bold'},
    root: {width: 1400, margin: '10px',},
    spacer: {height: 20},
});


const UserShow = (props) => {
    const {record} = useShowController(props);
    const classes = useStyles();
    const translate = useTranslate();
    if (!record) return null;


        return (
            <Card className={classes.root}>
                <CardContent className='userinfo'>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6" gutterBottom>
                                User Information
                            </Typography>
                        </Grid>

                    </Grid>
                    <div style={{width: '100%'}} className="rowg">
                        <Grid container spacing={2}>
                            <Grid item xs={12} container alignContent="flex-end">
                                <ReferenceField
                                    reference="students"
                                    source="students"
                                    basePath="/students"
                                    record={record}
                                    link={false}
                                >
                                    <Typography className='userdata'>
                                        <Table style={{width: '50%'}}>
                                            <TableHead>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell style={{width: '30%'}} >{translate('resources.students.fields.addressid')}</TableCell>
                                                    <TableCell >{record.addressid}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell >{translate('resources.students.fields.anrede')}</TableCell>
                                                    <TableCell >{record.anrede}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell >{translate('resources.students.fields.surname')}</TableCell>
                                                    <TableCell >{record.surname}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell >{translate('resources.students.fields.givenname')}</TableCell>
                                                    <TableCell>{record.givenname}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Typography>

                                </ReferenceField>
                            </Grid>

                            <Grid item xs={12} container alignContent="flex-start">

                                <Typography className='accountdata'>
                                    <Typography variant="h6" gutterBottom>
                                        Account Information
                                    </Typography>
                                    <AccountsInfo addressid={props.id}/>
                                </Typography>
                            </Grid>


                        </Grid>
                    </div>
                    <Paper>
                        <Tbl addressid={props.id}/>

                    </Paper>
                </CardContent>
            </Card>
        );

};

export default UserShow;


/*

 * <div className='info'>
 <Typography >
 termconfiguration  {record.termconfiguration}
 <br/>
 degreecode {record.degreecode}
 <br/>
 degree {record.degree}
 <br/>
 university {record.university}
 <br/>
 capr_nameeng {record.capr_nameeng}
 <br/>
 capr_degreeshort {record.capr_degreeshort}
 <br/>
 isnotifiable {record.isnotifiable}
 <br/>
 rwte_name  {record.rwte_name}
 <br/>
 term_type {record.term_type}
 <br/>
 </Typography>


 </div>
 */

