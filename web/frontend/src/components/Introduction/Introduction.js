import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import constants from '../constants';
import Skill from './Skill';
import expImg from '../../img/experience.png';

const IntroductionMain = styled.main`
    min-height: ${constants.containerHeightMedium};
    height: auto;
    margin: 80px 0 0 0;
`;

/* TODO: Replace with article tag */
const VerticalAlignDiv = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
    }
`;

const StyledHeader = styled.h3`
    font-size: ${constants.fontSizeLarge};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeMedium};
    }
`;

const StyledDescription = styled.p`
    padding: 17px 0 0 0;
    font-size: ${constants.fontSizeMedium};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeSmall};
    }
`;

const ImageWrapper = styled.img`
    margin: 0 0 0 50px;
    max-width: 450px;
    height: auto;
    width: auto;
`;

const PaddedDiv = styled.div`
    padding: 100px 0 0 0;
`;

const HyperLink = (props) => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );
};

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
        <IntroductionMain>
            <VerticalAlignDiv>
                <div style={{maxWidth: '62%'}}>
                    <StyledHeader> {payload.intro_developer_header} </StyledHeader>
                    <StyledDescription> {payload.intro_developer_description} </StyledDescription>
                </div>
            </VerticalAlignDiv>
            <PaddedDiv />
            <VerticalAlignDiv>
                <Skill/>
                <div style={{maxWidth: '30%'}}>
                    <StyledHeader> {payload.intro_skill_header} </StyledHeader>
                    <StyledDescription> {payload.intro_skill_description} </StyledDescription>
                </div>
            </VerticalAlignDiv>
            <PaddedDiv />
            <VerticalAlignDiv>
                <div style={{maxWidth: '36%'}}>
                    <StyledHeader> {payload.intro_work_experience_header} </StyledHeader>
                    <StyledDescription> {payload.intro_work_experience_description} </StyledDescription>
                    <DetailedLink aria-label='go to experience tab' to={payload.experience_personal_link} />
                </div>
                <ImageWrapper src={expImg} alt={'Tiny student sitting book pile reading flat illustration'}/>
            </VerticalAlignDiv>
        </IntroductionMain>
    );
};

Introduction.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Introduction);