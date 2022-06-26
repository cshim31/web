import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import constants from '../constants';
import Skill from './Skill';
import expImg from '../../img/experience.png';

const IntroductionMain = styled.main`
    min-height: ${constants.containerHeightMedium};
    margin: 50px auto 0px auto;
    padding: 20px;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
    }
`;

const StyledArticle = styled.article`
    margin: 30px 0 30px 0;
    padding: 20px;
`


const StyledHeader = styled.h4`
`;

const StyledDescription = styled.p`
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
            <StyledArticle>
                <StyledHeader> {payload.intro_developer_header} </StyledHeader>
                <StyledDescription> {payload.intro_developer_description1} </StyledDescription>
                <StyledDescription> {payload.intro_developer_description2} </StyledDescription>
            </StyledArticle>
            <Skill/>
            <StyledArticle>
                <StyledHeader> {payload.intro_skill_header} </StyledHeader>
                <StyledDescription> {payload.intro_skill_description1} </StyledDescription>
                <StyledDescription> {payload.intro_skill_description2} </StyledDescription>
            </StyledArticle>
            <StyledArticle>
                <StyledHeader> {payload.intro_work_experience_header} </StyledHeader>
                <StyledDescription> {payload.intro_work_experience_description1} </StyledDescription>
                <StyledDescription> {payload.intro_work_experience_description2} </StyledDescription>
            </StyledArticle>
            
            <DetailedLink aria-label='go to experience tab' to={payload.experience_personal_link} />
            <ImageWrapper src={expImg} alt={'Tiny student sitting book pile reading flat illustration'}/>
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