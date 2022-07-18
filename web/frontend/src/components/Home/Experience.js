import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledLink from '../Link';

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
        align-items: center;
    }
`;

const StyledCard = styled.div`
    margin: 40px 50px;
    background-color: transparent !important;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        margin: 0px 30px 0px 30px;
        max-width: 100%;
    }
`;

const StyledContent = styled.div`
    width: 450px;
    height: 400px;
    text-align: center;
    position: relative;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        margin: 0px;
    }
`;


const StyledImage = styled.img`
    width: 70%;
    height: 70%;
`;

const StyledInfo = styled.div`
`;

const StyledIcon = styled.div`
    
`

const StyledHeader = styled.h1`
    font-family: ${constants.fontTopicStyle};
`;

const StyledDescription = styled.p`
    font-family: ${constants.fontContentStyle}; 
`;



const ExperienceGroup = ({ payload }) => {
    return (
        <ExperienceContainer>
            <StyledCard>
                <StyledContent>
                    <StyledIcon>
                        <StyledImage
                            src= {corporationImg}
                            alt='Communication flat image'/>
                    </StyledIcon>
                    <StyledInfo>
                        <StyledHeader>
                            {payload.experience_corporation_header}
                        </StyledHeader>
                        <StyledDescription>
                            {payload.experience_corporation_description}
                        </StyledDescription>
                    </StyledInfo>
                </StyledContent>
                <StyledLink aria-label='go to experience tab' to={payload.experience_corporation_link}> {'Detail'} </StyledLink>
            </StyledCard>
            <StyledCard>
                <StyledContent>
                    <StyledIcon>
                        <StyledImage
                            src= {individualImg}
                            alt='Colourful programmer working illustration'/>
                    </StyledIcon>
                        <StyledInfo>
                            <StyledHeader>
                                {payload.experience_personal_header}
                            </StyledHeader>
                            <StyledDescription>
                                {payload.experience_personal_description}
                            </StyledDescription>
                        </StyledInfo>
                </StyledContent>
                <StyledLink aria-label='go to experience tab' to={payload.experience_personal_link}> {'Detail'} </StyledLink>
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