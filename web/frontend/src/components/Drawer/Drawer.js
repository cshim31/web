import * as React from 'react';
import {
    Drawer,
    ListItem,
    ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import constants from '../constants';
import AppLogo from '../App/AppLogo';

const DrawerContent = styled.div`
    background: ${constants.defaultPrimarySurfaceColor} !important;
    width: 300px;
    height: 100%;
    overflow: hidden;

    & a {
        color: ${constants.defaultPrimaryTextColor};
        text-decoration: none;
    }
`;

const DrawerLink = styled(Link)`
    width: 100%;
`;

const StyledNav = styled.a`
    width: 100%;
`;

const StyledListItem = styled(ListItem)`
    &:hover {
        background: ${constants.defaultSecondaryColor};
        transition: ${constants.defaultTransition};
    }
`;

const RouteDrawerItem = (props) => {

    return (
        <DrawerLink to={props.to} key={props.text}>
            <StyledListItem>
                <ListItemText primary={props.text} /> 
            </StyledListItem>
        </DrawerLink>  
    );
};
 
const NavDrawerItem = (props) => {

    return (
        <StyledListItem>
            <StyledNav href={props.to}>
                <ListItemText primary={props.text} /> 
            </StyledNav>
        </StyledListItem>
    );
};

const CustomDrawer = (props) => {

    const Content = props.content;

    return (
        <Drawer
            anchor={props.anchor}
            open={props.open}
            onClose={props.onClose}
        >
            <DrawerContent
                onClick={props.onClose}
            >
                <Content />
            </DrawerContent>
        </Drawer>
    );
};

CustomDrawer.propTypes = {
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    open: PropTypes.bool,
    onClose: PropTypes.func,
    content: PropTypes.oneOfType(
        PropTypes.func, 
        PropTypes.element
    ),
}

export {
    RouteDrawerItem,
    NavDrawerItem,
    CustomDrawer
}