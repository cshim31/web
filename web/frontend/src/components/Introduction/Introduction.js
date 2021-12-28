import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    min-height: ${constants.ContainerHeightMedium};
    height: auto;
`;

const HorizontalAlignDiv = styled.div`
    display: flex;
    flex-directions: column;
    justify-content: center;
`;


const StyledTextDiv = styled.div`
    max-width: 40%;
`;

const StyledHeader = styled.h1`
    font-size: ${constants.fontSizeLarge};
`;

const StyledDescription = styled.div`
    padding: 17px 0 0 0;
    font: ${constants.fontStyleSemi};
`;

const ImageWrapper = styled.img`
    margin: 0 0 0 50px;
`;

const TextBox = ({ header, description }) => {
    return (
        <StyledTextDiv>
            <StyledHeader> {header} </StyledHeader>
            <StyledDescription> {description} </StyledDescription>
        </StyledTextDiv>
    );
};

TextBox.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
};

const PaddedDiv = styled.div`
    padding: 100px 0 0 0;
`;

const DeveloperIntroduction = ({ payload }) => {
    return (
        <HorizontalAlignDiv>
            <TextBox header={payload.intro_developer_header} description={payload.intro_developer_description}/>
        </HorizontalAlignDiv>
    );
}

DeveloperIntroduction.propTypes = {
    payload: PropTypes.object,
}

const SkillIntroduction = ({ payload }) => {
    return (
        <PaddedDiv>
            <HorizontalAlignDiv>
                <TextBox header={payload.intro_skill_header} description={payload.intro_skill_description}/>
                <ImageWrapper />
            </HorizontalAlignDiv>
        </PaddedDiv>
    );
}

SkillIntroduction.propTypes = {
    payload: PropTypes.object,
}


const ExpIntroduction = ({ payload }) => {
    return (
        <PaddedDiv>
            <HorizontalAlignDiv>
                <TextBox header={payload.intro_work_experience_header} description={payload.intro_work_experience_description}/>
                <ImageWrapper />
            </HorizontalAlignDiv>
        </PaddedDiv>
    );
}

ExpIntroduction.propTypes = {
    payload: PropTypes.object,
}


const Introduction = ({ payload }) => {

    return (
        <IntroductionContainer>
            <DeveloperIntroduction payload={payload}/>
            <SkillIntroduction payload={payload}/>
            <ExpIntroduction payload={payload} />
        </IntroductionContainer>
    );
};

Introduction.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Introduction);