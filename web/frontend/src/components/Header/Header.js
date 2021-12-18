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

import constants from '../constants';
import AppLogo from '../App/AppLogo';
import Settings from '../Settings';
import ReportTab from '../ReportTab';

const HeaderBar = styled(Toolbar)`
    backdrop-filter: blur(16px);
    background-color: ${constants.defaultPrimaryColorSolid} !important;
    height: 56px;
    left: 0;
    padding: 8px 16px !important;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${constants.priorStackOrder}
    & a {
    color: ${constants.primaryTextColor};
    &:hover {
        color: ${constants.primaryTextColor};
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
                <AppLogo string='CSHIM' />
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
                            <Link to={page.to}>{page.label}</Link> 
                        </LinkWrapper>
                    </TabContainer>
                ))
            }
        </VerticalAlignDiv>
    );
};

const LinkWrapper = styled.div`
    @media screen and (max-width: 800px) {
        display: none;
    }
    margin-right: 16dp;
`;

LinkGroup.propTypes = {
    LinkbarPages: PropTypes.arrayOf(PropTypes.object),
};

const MenuWrapper = styled.div`

`;


const Header = () => {

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
    
        {
            key: 'page_git',
            to:{
                pathname:'/git'
            },
            label: 'GitHub',
        },
    
    ];

    return(
        <HeaderBar>
            <Router>
                <VerticalAlignDiv>
                    <LogoGroup />
                    <LinkGroup LinkbarPages={LinkbarPages}/>
                </VerticalAlignDiv>
                <VerticalAlignDiv style={{ marginLeft: 'auto', marginRight:'3%'}}>
                    <Settings>
                        <ReportTab />
                    </Settings>
                </VerticalAlignDiv>
                <VerticalAlignDiv>
                    
                </VerticalAlignDiv>
                <VerticalAlignDiv>
                    
                </VerticalAlignDiv>
            </Router>
        </HeaderBar>
    );
};

export default Header;