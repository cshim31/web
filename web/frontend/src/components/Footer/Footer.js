import styled from '@emotion/styled';
import { 
    BrowserRouter as Router 
} from 'react-router-dom';

import constants from '../constants';
import AppLogo from '../App/AppLogo';
import SocialGroup from '../Social';
import Description from '../Description';

const StyledFooter = styled.footer`
    background-color: ${constants.defaultPrimaryColor} !important;
    width: 100%;
    bottom: 0;
    height: 160px;

`;

const StyledDiv = styled.div`
    margin: 45px 16px 8px 50px; 
    display: flex;
    flex-direction: column;
`;

const VerticalAlignDiv = styled.div`
    display: flex;
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
                    <Description />
                </VerticalAlignDiv>
                <VerticalAlignDiv>
                    
                </VerticalAlignDiv>
            </StyledDiv>
        </StyledFooter>
    );
};

export default Footer;