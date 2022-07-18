import React from 'react';
import {
    Toolbar,
    IconButton,
    List,
    ListItem,
} from '@mui/material';
import { 
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import { 
    Menu as MenuIcon,
} from '@mui/icons-material';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import constants from '../constants';
import AppLogo from '../App/AppLogo';
import Settings from '../Settings';
import Report from '../SettingsGroup';
import {
    RouteDrawerItem,
     NavDrawerItem, 
     CustomDrawer
} from '../Drawer/Drawer';

const StyledToolBar = styled(Toolbar)`
    backdrop-filter: blur(16px);
    background-color: ${constants.defaultPrimaryColor} !important;
    height: ${constants.defaultHeaderHeight};
    top: 0;
    left: 0;
    padding: 0px 16px !important;
    position: fixed;
    width: 100%;
    z-index: ${constants.priorStackOrder};
    & a {
    color: ${constants.defaultPrimaryTextColor};
    &:hover {
        opacity: 0.6;
        }
    }
`;

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${constants.fontWeightNormal};
  height: 100%;
  justify-content: center;
  margin: 0 12px;
  text-align: center;
  position: relative;
`;

const LogoGroup = ({ payload }) => {

    const [open, setOpen] = React.useState(false);

    const onMenuClick = () => {
        setOpen(true);
    };

    const toggleDrawer = () => {
        setOpen(false);
    };

    const items = [
            {
                to:{
                    pathname: payload.route_intro_link
                },
                text: payload.route_intro_text,
            },
        
            {
                to:{
                    pathname: payload.route_exp_link
                },
                text: payload.route_exp_text,
            },
    ];


    const content = () => (
        <List>
            <ListItem sx={{'justifyContent': 'center'}}>
                <AppLogo string={payload.app_logo} />
            </ListItem>

            {
                items.map((anchor) => (
                    <RouteDrawerItem key={anchor.text} to={anchor.to} text={anchor.text}/>
                ))
            }

            <NavDrawerItem 
                to={payload.app_github_link}
                text={payload.app_github_label}
            />

        </List>
    );

    return (
        <VerticalAlignDiv>
            <IconWrapper>
                <IconButton 
                    aria-label='menu'
                    aria-controls='menu-appbar'
                    onClick={onMenuClick}
                    color='inherit'
                >
                    <MenuIcon />
                </IconButton>
            </IconWrapper>
            <CustomDrawer
                anchor={payload.app_drawer_direction}
                open={open}   
                onClose={toggleDrawer}
                content={content}
            />
            <LogoWrapper>
                <AppLogo />
            </LogoWrapper>
        </VerticalAlignDiv>
    );
};


LogoGroup.propTypes = {
    payload: PropTypes.object,
};

const IconWrapper = styled.div`
    margin-right: 16px;
`;

const LogoWrapper = styled.div`
    @media screen and (max-width: ${constants.defaultAppWidth}) {
        display: none;
    }
    margin-right: 16px;
`;

const LinkGroup = ({ LinkbarPages }) => {
    return (
        <VerticalAlignDiv>
            {
                LinkbarPages.map((page) => (
                    <TabContainer key={page.key}>
                        <LinkWrapper>
                            <StyledLink to={page.to}>{page.label}</StyledLink> 
                        </LinkWrapper>
                    </TabContainer>
                ))
            }
        </VerticalAlignDiv>
    );
};


LinkGroup.propTypes = {
    LinkbarPages: PropTypes.arrayOf(PropTypes.object),
};

const NavigationLink = ({ payload }) => {
    return (
        <TabContainer>
            <LinkWrapper>
                <a href={payload.app_github_link}> {payload.app_github_label} </a>
            </LinkWrapper>
        </TabContainer>
    );
}

NavigationLink.propTypes = {
    payload: PropTypes.object,
};

const LinkWrapper = styled.div`
    @media screen and (max-width: ${constants.defaultAppWidth}) {
        display: none;
    }
    margin-right: 16dp;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;



LinkGroup.propTypes = {
    LinkbarPages: PropTypes.arrayOf(PropTypes.object),
};


const Header = ({ payload }) => {

    const LinkbarPages = [
        {
            key: 'page_intro',
            to:{
                pathname:'/intro'
            },
            label: 'ABOUT',
        },
    
        {
            key: 'page_exp',
            to:{
                pathname:'/exp'
            },
            label: 'EXPERIENCE',
        },
    
    ];

    return(
        <StyledToolBar>
            <VerticalAlignDiv>
                <LogoGroup payload={payload}/>
                <LinkGroup LinkbarPages={LinkbarPages}/>
            </VerticalAlignDiv>
            <VerticalAlignDiv>
                <NavigationLink payload={payload}/>
            </VerticalAlignDiv>
            <VerticalAlignDiv>
                
            </VerticalAlignDiv>
            <VerticalAlignDiv style={{ marginLeft: 'auto', marginRight:'3%'}}>
                <Settings>
                    <Report />
                </Settings>
            </VerticalAlignDiv>
        </StyledToolBar>
    );
};

Header.propTypes = {
    payload: PropTypes.object,
}

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(Header);