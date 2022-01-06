import styled from '@emotion/styled';
import { 
    BrowserRouter as Router 
} from 'react-router-dom';

import constants from '../constants';
import AppLogo from '../App/AppLogo';
import SocialGroup from '../Social';
import Description from './Description';
import Credit from './Credit';

const StyledFooter = styled.footer`
    background-color: ${constants.defaultSecondaryColor} !important;
    width: 100%;
    left: 0;
    bottom: 0;

    & a {
        color: ${constants.defaultPrimaryTextColor};
        &:hover {
            color: ${constants.defaultPrimaryTextColor};
            opacity: 0.6;
        }
    }
`;

const StyledDiv = styled.div`
    margin: 45px 16px 30px 50px; 
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
                <Description />
                <Credit />
            </StyledDiv>
        </StyledFooter>
    );
};

export default Footer;