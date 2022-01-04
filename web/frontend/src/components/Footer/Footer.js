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
    display: flex;
    background-color: ${constants.defaultSecondaryColor} !important;
    width: 100%;
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
                    <Credit />
                </VerticalAlignDiv>
            </StyledDiv>
        </StyledFooter>
    );
};

export default Footer;