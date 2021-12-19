import styled from '@emotion/styled';
import { 
    BrowserRouter as Router 
} from 'react-router-dom';

import constants from '../constants';
import AppLogo from '../App/AppLogo';
import SocialGroup from '../Social';

const StyledFooter = styled.footer`
    background-color: ${constants.defaultPrimaryColor} !important;
    width: 100%;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    position: absolute;
`;

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Router>
                <VerticalAlignDiv>
                    <AppLogo string='CSHIM'/>
                    <SocialGroup />
                </VerticalAlignDiv>
            </Router>
            <VerticalAlignDiv>
                
            </VerticalAlignDiv>
            <VerticalAlignDiv>
                
            </VerticalAlignDiv>
        </StyledFooter>
    );
};

export default Footer;