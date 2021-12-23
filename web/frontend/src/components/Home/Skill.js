import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LanguageIcon from '@mui/icons-material/Language';

import constants from '../constants';

const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    background: inherit;
    width: 50%;
    height: auto;

    & a {
        color: ${constants.defaultPrimaryTextColor};
    }
`;

const StyledDiv = styled.div`
    align-items: center;
    margin: 160px 20px 160px 0;
    max-width: 25%;
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
    return (
        <SkillContainer>
            <StyledDiv>
                <IconWrapper>
                    <LanguageIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> {payload.skill_language_header} </StyledHeader>
                <StyledDescription> {payload.skill_language_description} </StyledDescription>
            </StyledDiv>
            <StyledDiv>
                <IconWrapper>
                    <LanguageIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> {payload.skill_tool_header} </StyledHeader>
                <StyledDescription> {payload.skill_tool_description} </StyledDescription>
            </StyledDiv>
            <StyledDiv>
                <IconWrapper>
                    <LanguageIcon fontSize='large'/>
                </IconWrapper>
                <StyledHeader> {payload.skill_personality_header} </StyledHeader>
                <StyledDescription> {payload.skill_personality_description} </StyledDescription>
            </StyledDiv>
        </SkillContainer>
    );
}

Skill.propTypes = {
    payload: PropTypes.object,
}

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(Skill);