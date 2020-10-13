import React, { Component, Children, cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import shouldUpdate from 'recompose/shouldUpdate';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link, linkToRecord } from 'react-admin';

/**
 * style
 *
 * @type {{link: {cursor: string, "& *": {cursor: string}}}}
 */
const styles = {
    link: {
        cursor: 'pointer',
        '& *': {
            cursor: 'pointer',
        },
    },
};
/**
 *
 * @param link
 * @param rest
 * @returns {*}
 */
const sanitizeRestClasses = ({ link, ...rest }) => rest;

/**
 *
 * @param classes
 * @param to
 * @param relative
 * @param disabled
 * @param history
 * @param location
 * @param match
 * @param staticContext
 * @param rest
 * @returns {*}
 */
const sanitizeRestProps = ({
                               classes,
                               to,
                               relative,
                               disabled,
                               history,
                               location,
                               match,
                               staticContext,
                               ...rest
                           }) => rest;


class LinkAnyFieldButton extends Component {
    static propTypes = {
        // passed by parent
        basepath: PropTypes.string,
        children: PropTypes.any,
        record: PropTypes.object,
        classes: PropTypes.object,
        // own props
        to: PropTypes.string,
        relative: PropTypes.bool,
        disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        // withRouter props
        match: PropTypes.object,
    };
    static defaultProps = {
        to: 'show',
    };

    render() {
        const {
            basepath = '',
            children,
            record = {},
            classes,
            to,
            relative,
            disabled,
            match,
        } = this.props;

        const recordLink = to.startsWith('/')
            ? to.replace(/\/:([\w-]+)/g, (m, param) => {
                return `/${record[param]}`;
            })
            : linkToRecord(basepath, record.id, to);
        const completeTo = relative ? `${match.url}${recordLink}` : recordLink;
        const rest = sanitizeRestProps(this.props);
        const restClasses = sanitizeRestClasses(classes);
        const isDisabled =
            typeof disabled === 'function' ? disabled(record) : disabled;

        const countChildren = Children.count(children);

        const childElements =
            countChildren === 1
                ? cloneElement(children, {
                    record,
                    basepath,
                    classes: restClasses,
                })
                : Children.map(children, field =>
                    cloneElement(field, {
                        record,
                        basepath,
                        classes: restClasses,
                        ...rest,
                    })
                );

        return isDisabled ? (
            <Fragment>{childElements}</Fragment>
        ) : (
            <Link to={`${completeTo}`} className={classes.link}>
                {childElements}
            </Link>
        );
    }
}

/**
 *
 *  add props: history, location, match, staticContext
 *  add style
 *
 *  @param props
 *  @param nextProps
 *
 */
const enhance = compose(
    withRouter, // adds props: history, location, match, staticContext
    withStyles(styles),
    shouldUpdate(
        (props, nextProps) =>
            props.translate !== nextProps.translate ||
            (props.record &&
                nextProps.record &&
                props.record.id !== nextProps.record.id) ||
            props.basePath !== nextProps.basePath ||
            (props.record == null && nextProps.record != null)
    )
);

export default enhance(LinkAnyFieldButton);
