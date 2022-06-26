import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    Card,
} from '@mui/material';
import { Link } from "react-router-dom";

import constants from '../constants';
import corporationImg from '../../img/corporation.png';
import individualImg from '../../img/developer.png';

const StyledDiv = styled.div`
    background-color: transparent;
    text-align: center;
    width: 70%;
    margin: 0 auto 100px auto;
`;


const StyledTopic = styled.div`
    font-size: ${constants.fontSizeLarge};
    font-style: normal;
    font-weight: ${constants.fontWeightMedium};
    padding: 60px 0 0 0;
`;

const Topic = ({ string }) => {
    return (
        <StyledTopic>
            {string}
        </StyledTopic>
    );
}

Topic.propTypes = {
    string: PropTypes.string,
}

const ExperienceContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        flex-direction: column;
    }
`;

const StyledCard = styled.div`
    max-width: 35%;
    margin: 40px 30px 30px 0;
    background-color: transparent !important;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        margin-left: 30px;
        margin-right: 30px;
        max-width: 100%;
    }
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
`;

const Image = (props) => {
    return (
        <StyledImage {...props} />
    );
}

const StyledImage = styled.img`
    max-height: 300px;
    height: auto;
    width: auto;
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleMedium};
`;

const StyledDescription = styled.p`
    font: ${constants.fontStyleSmall};
`;

const StyledLink = styled(Link)`
    font-weight: ${constants.fontWeightMedium};
    font-size: ${constants.fontSizeSmall};
    color: ${constants.defaultPrimaryRefColor};
    padding: 30px 0 30px 0;

    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        color: ${constants.defaultPrimaryRefColor};
        opacity: 0.8;
    }
`;

const HyperLink = (props) => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );
};



const ExperienceGroup = ({ payload }) => {
    return (
        <ExperienceContainer>
            <StyledCard>
                <StyledContent>
                    <Image
                        src= {corporationImg}
                        alt='Communication flat image'/>
                    <StyledHeader>
                        {payload.experience_corporation_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_corporation_description}
                    </StyledDescription>
                    <HyperLink aria-label='go to experience tab' to={payload.experience_corporation_link}> {'Detail'} </HyperLink>
                </StyledContent>
            </StyledCard>
            <StyledCard>
                <StyledContent>
                    <Image
                        src= {individualImg}
                        alt='Colourful programmer working illustration'/>
                    <StyledHeader>
                        {payload.experience_personal_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_personal_description}
                    </StyledDescription>
                    <HyperLink aria-label='go to experience tab' to={payload.experience_personal_link}> {'Detail'} </HyperLink>
                </StyledContent>
            </StyledCard>
        </ExperienceContainer>
    );
};

ExperienceGroup.propTypes = {
    payload: PropTypes.object,
};

const Experience = ({ payload }) => {
    const topic = 'Experience'

    return (
        <StyledDiv>
            <Topic string={topic} />
            <ExperienceGroup payload={payload} />
        </StyledDiv>
    );
};

Experience.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(Experience);