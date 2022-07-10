import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { IconContext } from 'react-icons/lib';
import { 
    SiCplusplus,
    SiJava,
    SiPython,
    SiJavascript,
    SiReact,
    SiRobotframework,
    SiCss3,
    SiAmazonaws,
    SiMysql,
    SiConfluence,
    SiJira,
    SiSlack,
    SiBitbucket,
    SiCsharp
 } from 'react-icons/si';
import { 
    TbCSharp,
    TbBrandHtml5,

 } from 'react-icons/tb';

import constants from '../constants';
import { StyledArticle } from '../Article';
import { StyledHeader, StyledDescription } from '../Text';
import Skill from './Skill';
import expImg from '../../img/experience.png';


const IntroductionMain = styled.main`
    min-height: ${constants.containerHeightMedium};
    margin: 50px auto 0px auto;
    padding: 20px;
`;

const ImageWrapper = styled.img`
    margin: 0 0 0 50px;
    max-width: 450px;
    height: auto;
    width: auto;
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

const StackDiv = styled.div`
    margin: 75px 100px 0px 100px;
`;

const StyledIcon = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0px;
    padding: 30px;
`;

const SkillStack = () => {
    
    const iconList = [
        { color: '0076F7', icon: <SiCplusplus />, tag: "C++"},
        { color: '95478E', icon: <TbCSharp />, tag: "C#"},
        { color: '3276AE', icon: <SiPython />, tag: "Python"},
        { color: '276CB1', icon: <SiJava />, tag: "Java"},
        { color: 'EFD81D', icon: <SiJavascript />, tag: "Javascript"},
        { color: '00D1F7', icon: <SiReact />, tag: "React"},
        { color: '000000', icon: <SiRobotframework />, tag: "Robot Framework"},
        { color: 'DD4B25', icon: <TbBrandHtml5 />, tag: "HTML"},
        { color: '146EB1', icon: <SiCss3 />, tag: "CSS"},
        { color: '00537F', icon: <SiMysql />, tag: "MySQL"},
        { color: '252D39', icon: <SiAmazonaws />, tag: "AWS"},
        { color: '0050C7', icon: <SiConfluence />, tag: "Confluence"},
        { color: '2580F7', icon: <SiJira />, tag: "Jira"},
        { color: '481449', icon: <SiSlack />, tag: "Slack"},
        { color: '267FF6', icon: <SiBitbucket />, tag: "BitBucket"},
    ];

    return (
        <StackDiv>
            {
                iconList.map((item) => (
                    <IconContext.Provider value={{ color: item.color, size: 85 }}>
                        <StyledIcon>
                            {item.icon}
                            <p>
                                {item.tag}
                            </p>
                        </StyledIcon>
                    </IconContext.Provider>
                ))
            }
        </StackDiv>
    );
};

const Introduction = ({ payload }) => {

    return (
        <IntroductionMain>
            <StyledArticle>
                <StyledHeader> {payload.intro_developer_header} </StyledHeader>
                <StyledDescription> {payload.intro_developer_description1} </StyledDescription>
                <StyledDescription> {payload.intro_developer_description2} </StyledDescription>
                <StyledDescription> {payload.intro_developer_description3} </StyledDescription>
                <StyledDescription> {payload.intro_developer_description4} </StyledDescription>
            </StyledArticle>
            <Skill/>
            <StyledArticle>
                <StyledHeader> {payload.intro_skill_header} </StyledHeader>
                <StyledDescription> {payload.intro_skill_description1} </StyledDescription>
                <StyledDescription> {payload.intro_skill_description2} </StyledDescription>
                <SkillStack />
            </StyledArticle>
            
            {
                // change it to different icons in row
            /*
            <StyledArticle>
                <StyledHeader> {payload.intro_work_experience_header} </StyledHeader>
                <StyledDescription> {payload.intro_work_experience_description1} </StyledDescription>
                <StyledDescription> {payload.intro_work_experience_description2} </StyledDescription>
            </StyledArticle>
            
            <DetailedLink aria-label='go to experience tab' to={payload.experience_personal_link} />
            <ImageWrapper src={expImg} alt={'Tiny student sitting book pile reading flat illustration'}/>
            */
            }
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