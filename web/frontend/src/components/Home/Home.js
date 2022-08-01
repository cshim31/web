import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import constants from '../constants';
import Banner from "../Banner";
import Skill from './Skill';
import Experience from './Experience';
import ImageWrapper from '../Image';
import {
    TextWrapper,
    StyledHeader,
    StyledDescription
} from "../Text";

const HomeMain = styled.main`
    min-height: ${constants.containerHeightMedium};
`;

const Home = ({ payload }) => {
    const content = [
        <TextWrapper key="desc">
                <StyledHeader> {payload.app_owner_header} </StyledHeader>
                <StyledDescription> {payload.app_owner_description1} </StyledDescription>
                <StyledDescription> {payload.app_owner_description2} </StyledDescription>
        </TextWrapper>,
        <ImageWrapper
            key="logo"
            src= {'/images/developer_wide.png'}
            alt='Website creator concept illustration'
        />
    ];

    return (
        <HomeMain>
            <Banner content={content} />
            <Skill />
            <Experience />
        </HomeMain>
    );
};

Home.propTypes = {
    payload: PropTypes.object,
};


const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Home);