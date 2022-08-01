import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import constants from '../constants';

const StyledDiv = styled.div`
    text-align: center;
    background: inherit;
    margin: 100px auto 50px auto;
    width: ${constants.defaultAppWidth};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        width: 100%;
    }
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
};

const SkillContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 80px 0 160px 0;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        flex-direction: column;
    }
`;

const StyledContainer = styled.div`
    padding: 30px 0 0 0;
    height: 250px;
    width: 220px;
`;

const IconWrapper = styled.div`
    align-items: center;
    height: 40px;
`;

const StyledInfo = styled.div`
    margin: 30px 0px;
`;

const StyledHeader = styled.strong`
    font-family: ${constants.fontTopicStyle};
    display: block;
    font-size: ${constants.fontSizeSemi};
`;

const StyledDescription = styled.p`
    font-family: ${constants.fontContentStyle}; 
`;

const SkillGroup = ({ payload }) => {
    return (
        <SkillContainer>
            <StyledContainer>
                <IconWrapper>
                    <CodeOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledInfo>
                    <StyledHeader> 
                        {payload.skill_language_header} 
                    </StyledHeader>
                    <StyledDescription> 
                        {payload.skill_language_description} 
                    </StyledDescription>
                </StyledInfo>
            </StyledContainer>
            <StyledContainer>
                <IconWrapper>
                    <EngineeringOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledInfo>
                    <StyledHeader> 
                    {payload.skill_principle_header} 
                    </StyledHeader>
                    <StyledDescription>
                        {payload.skill_principle_description} 
                    </StyledDescription>
                </StyledInfo>
            </StyledContainer>
            <StyledContainer>
                <IconWrapper>
                    <SchoolOutlinedIcon fontSize='large'/>
                </IconWrapper>
                <StyledInfo>
                    <StyledHeader> 
                        {payload.skill_personality_header} 
                    </StyledHeader>
                    <StyledDescription> 
                        {payload.skill_personality_description} 
                    </StyledDescription>
                </StyledInfo>
            </StyledContainer>
        </SkillContainer>
    );
};

SkillGroup.propTypes = {
    payload: PropTypes.object,
};


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