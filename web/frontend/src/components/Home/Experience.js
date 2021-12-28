import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    Card,
    CardContent 
} from '@mui/material';
import { Link } from 'react-router-dom';

import constants from '../constants';
import corporationImg from '../../img/corporation.png';
import individualImg from '../../img/developer.png';

const StyledDiv = styled.div`
    background-color: ${constants.defaultSecondaryColor} !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 70%;
    margin: 0 0 100px 0;
`;


const StyledTopic = styled.div`
    font-size: ${constants.fontSizeLarge};
    font-style: normal;
    font-weight: ${constants.fontWeightMedium};
    margin: 60px 0 0 0;
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
    align-items: center;
    justify-content: center;
    width: auto;
`;

const StyledCard = styled(Card)`
    max-width: 35%;
    height: 525px;
    margin: 80px 30px 30px 0;
`;

const Image = (props) => {
    return (
        <StyledImage {...props} />
    );
}

const StyledImage = styled.img`
    max-height: 300px;
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleMedium};
`;

const StyledDescription = styled.p`
    height: 100px;
    font: ${constants.fontStyleSmall};
`;

const DetailedLink = (props) => {
    return (
        <StyledLink {...props}>
            {'Detail'}
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    font-weight: ${constants.fontWeightMedium};
    font-size: ${constants.fontSizeSmall};
    color: ${constants.defaultPrimaryRefColor};
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        color: ${constants.defaultPrimaryRefColor};
        opacity: 0.8;
    }
`;

const ExperienceGroup = ({ payload }) => {
    return (
        <ExperienceContainer>
            <StyledCard>
                <CardContent>
                    <Image
                        src= {corporationImg}
                        alt='Corporation vector'/>
                    <StyledHeader>
                        {payload.experience_corporation_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_corporation_description}
                    </StyledDescription>
                    <DetailedLink aria-label='go to experience tab' to={payload.experience_corporation_link}/>
                </CardContent>
            </StyledCard>
            <StyledCard>
                <CardContent>
                    <Image
                        src= {individualImg}
                        alt='Developer vector'/>
                    <StyledHeader>
                        {payload.experience_personal_header}
                    </StyledHeader>
                    <StyledDescription>
                        {payload.experience_personal_description}
                    </StyledDescription>
                    <DetailedLink aria-label='go to experience tab' to={payload.experience_personal_link}/>
                </CardContent>
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