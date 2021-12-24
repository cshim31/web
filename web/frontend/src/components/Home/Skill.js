import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import constants from '../constants';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: inherit;
    width: 50%;
    margin: 100px 0 50px 0;
`;

const StyledTopic = styled.div`
    font-size: ${constants.fontSizeLarge};
    font-style: normal;
    font-weight: ${constants.fontWeightMedium};
    margin: 20px 0 0 0;
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

const SkillGroup = ({ payload }) => {
    return (
        <SkillContainer>
            <StyledContainer>
                <IconWrapper>
                    <CodeOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> 
                    {payload.skill_language_header} 
                </StyledHeader>
                <StyledDescription> 
                    {payload.skill_language_description} 
                </StyledDescription>
            </StyledContainer>
            <StyledContainer>
                <IconWrapper>
                    <EngineeringOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> 
                    {payload.skill_principle_header} 
                </StyledHeader>
                <StyledDescription>
                    {payload.skill_principle_description} 
                </StyledDescription>
            </StyledContainer>
            <StyledContainer>
                <IconWrapper>
                    <SchoolOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> 
                    {payload.skill_personality_header} 
                </StyledHeader>
                <StyledDescription> 
                    {payload.skill_personality_description} 
                </StyledDescription>
            </StyledContainer>
        </SkillContainer>
    );
};

SkillGroup.propTypes = {
    payload: PropTypes.object,
}

const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin: 80px 20px 160px 0;
`;

const StyledContainer = styled.div`
    align-items: center;
    max-width: 28%;
`;

const IconWrapper = styled.div`
    margin: 0 0 50px 0;
    align-items: center;
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleMedium};
`;

const StyledDescription = styled.p`
    font: ${constants.fontStyleSmall};
`;


const Skill = ({ payload }) => {

    const topic = "Skill"

    return (
        <StyledDiv>
            <Topic string={topic} />
            <SkillGroup payload={payload} />
        </StyledDiv>
    );
}

Skill.propTypes = {
    payload: PropTypes.object,
}

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(Skill);