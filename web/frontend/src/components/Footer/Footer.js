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
    height: 100px;
    display: flex;
    flex-direction: row;
    position: absolute;
`;

const StyledDiv = styled.div`
    margin: 30px 16px 8px 30px; 
`;

const VerticalAlignDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledDiv>
                <Router>
                    <VerticalAlignDiv>
                        <AppLogo />
                        <SocialGroup />
                    </VerticalAlignDiv>
                </Router>
                <VerticalAlignDiv>
                    
                </VerticalAlignDiv>
                <VerticalAlignDiv>
                    
                </VerticalAlignDiv>
            </StyledDiv>
        </StyledFooter>
    );
};

export default Footer;