import React from 'react';
import {AppBar} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import MyUserMenu from './lang/myUserMenu'
import logo from './logo.svg';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    logo: {
        width: '80px',
    },
});
const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} color='secondary' userMenu={<MyUserMenu />} >
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo}/>
            </Toolbar>

            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
            />
        </AppBar>
    );
};

export default MyAppBar
