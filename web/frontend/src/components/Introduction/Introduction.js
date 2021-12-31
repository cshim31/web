import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';
import Skill from './Skill';
import HyperLink from '../Link';
import expImg from '../../img/experience.png';

const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    min-height: ${constants.containerHeightMedium};
    height: auto;
`;

const HorizontalAlignDiv = styled.div`
    display: flex;
    flex-directions: column;
    justify-content: center;
`;


const StyledTextDiv = styled.div`
    max-width: 60%;
`;

const StyledHeader = styled.h3`
    font-size: ${constants.fontSizeLarge};
`;

const StyledDescription = styled.p`
    padding: 17px 0 0 0;
    font-size: ${constants.fontSizeSmall};
`;

const ImageWrapper = styled.img`
    margin: 0 0 0 50px;
`;

const PaddedDiv = styled.div`
    padding: 100px 0 0 0;
`;

const DetailedLink = (props) => {
    return (
        <CenterDiv>
            <HyperLink {...props}>
                {'Detail'}
            </HyperLink>
        </CenterDiv>
    )
};

const CenterDiv = styled.div`
    padding: 70px 0 0 0;
    text-align: center;
`;

const Introduction = ({ payload }) => {

    return (
        <IntroductionContainer>
            <HorizontalAlignDiv>
            <StyledTextDiv style={{maxWidth: '62%'}}>
                <StyledHeader> {payload.intro_developer_header} </StyledHeader>
                <StyledDescription> {payload.intro_developer_description} </StyledDescription>
            </StyledTextDiv>
            </HorizontalAlignDiv>
            <PaddedDiv>
                <HorizontalAlignDiv>
                    <Skill/>
                    <StyledTextDiv style={{maxWidth: '30%'}}>
                        <StyledHeader> {payload.intro_skill_header} </StyledHeader>
                        <StyledDescription> {payload.intro_skill_description} </StyledDescription>
                    </StyledTextDiv>
                </HorizontalAlignDiv>
            </PaddedDiv>
            <PaddedDiv>
                <HorizontalAlignDiv>
                    <StyledTextDiv style={{maxWidth: '36%'}}>
                        <StyledHeader> {payload.intro_work_experience_header} </StyledHeader>
                        <StyledDescription> {payload.intro_work_experience_description} </StyledDescription>
                        <DetailedLink aria-label='go to experience tab' to={payload.experience_personal_link} />
                    </StyledTextDiv>
                    <ImageWrapper src={expImg} alt={'Tiny student sitting book pile reading flat illustration'}/>
                </HorizontalAlignDiv>
            </PaddedDiv>
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