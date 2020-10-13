import React, { forwardRef } from 'react';
import {  UserMenu, useLocale, useSetLocale, useTranslate } from 'react-admin';
import { makeStyles, MenuItem, ListItemIcon } from '@material-ui/core';
import { Language } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    menuItem: {
        color: theme.palette.text.secondary,
    },
    icon: { minWidth: theme.spacing(5) },
}));

const SwitchLanguage = forwardRef((props, ref) => {
    const locale = useLocale();
    const setLocale = useSetLocale();
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <MenuItem
            ref={ref}
            className={classes.menuItem}
            onClick={() => {
                setLocale(locale === 'en' ? 'de' : 'en');
                props.onClick();
            }}
        >

            <ListItemIcon className={classes.icon}>
                <Language />
            </ListItemIcon>
          {translate('pos.language')}
        </MenuItem>
    );
});

const MyUserMenu = props => (
    <UserMenu {...props}>
        <SwitchLanguage />
    </UserMenu>
);

export default MyUserMenu;
