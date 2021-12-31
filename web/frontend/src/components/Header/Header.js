import React from 'react';
import {
    Toolbar,
    IconButton,
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
import ReportTab from '../ReportTab';

const StyledToolBar = styled(Toolbar)`
    backdrop-filter: blur(16px);
    background-color: ${constants.defaultPrimaryColor} !important;
    height: ${constants.defaultHeaderHeight};
    left: 0;
    padding: 0px 16px !important;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${constants.priorStackOrder};
    & a {
    color: ${constants.defaultPrimaryTextColor};
    &:hover {
        color: ${constants.defaultPrimaryTextColor};
        opacity: 0.6;
        }
    }
`;

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

const LogoGroup = () => {
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
            <LogoWrapper>
                <AppLogo />
            </LogoWrapper>
        </VerticalAlignDiv>
    );
};

const IconWrapper = styled.div`
    margin-right: 16px;
`;

const LogoWrapper = styled.div`
    @media screen and (max-width: 800px) {
        display: none;
    }
    margin-right: 16px;
`;

const onMenuClick = () => {

};

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
    @media screen and (max-width: 800px) {
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
            label: 'Introduction',
        },
    
        {
            key: 'page_exp',
            to:{
                pathname:'/exp'
            },
            label: 'Experience',
        },
    
    ];

    return(
        <StyledToolBar>
            <VerticalAlignDiv>
                <LogoGroup />
                <LinkGroup LinkbarPages={LinkbarPages}/>
            </VerticalAlignDiv>
            <VerticalAlignDiv>
                <NavigationLink payload={payload}/>
            </VerticalAlignDiv>
            <VerticalAlignDiv>
                
            </VerticalAlignDiv>
            <VerticalAlignDiv style={{ marginLeft: 'auto', marginRight:'3%'}}>
                <Settings>
                    <ReportTab />
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