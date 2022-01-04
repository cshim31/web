import * as React from 'react';
import {
    Drawer,
    List,
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

const HeaderDrawer = (props) => {

    const items = [
        {
            key: 'page_intro',
            to:{
                pathname:'/intro'
            },
            text: 'Introduction',
        },
    
        {
            key: 'page_exp',
            to:{
                pathname:'/exp'
            },
            text: 'Experience',
        },
    
    ];

    const content = (items) => (
        <List>
            {
                props.payload? (
                    <ListItem sx={{'justifyContent': 'center'}}>
                        <AppLogo string={props.payload.app_logo} />
                    </ListItem>
                ) : (
                    <div />
                )
            }

            {
                items.map((anchor) => (
                    <DrawerLink to={anchor.to} key={anchor.key}>
                        <StyledListItem>
                            <ListItemText primary={anchor.text} /> 
                        </StyledListItem>
                    </DrawerLink>
                ))
            }

            {
                props.payload? (
                    <StyledListItem>
                        <StyledNav href={props.payload.app_github_link}>
                            <ListItemText primary={props.payload.app_github_label} /> 
                        </StyledNav>
                    </StyledListItem>
                ) : (
                    <div />
                )
            }

        </List>
    );

    return (
        <Drawer
            anchor={props.anchor}
            open={props.open}
            onClose={props.onClose}
        >
            <DrawerContent
                onClick={props.onClose}
            >
                {
                    content(items)
                }
            </DrawerContent>
        </Drawer>
    );
};

HeaderDrawer.propTypes = {
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    open: PropTypes.bool,
    onClose: PropTypes.func,
    payload: PropTypes.object,
}

export default HeaderDrawer;