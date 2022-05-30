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
import bannerImg from '../../img/developer_wide.png';

const HomeMain = styled.main`
    min-height: ${constants.containerHeightMedium};
`;

const Home = ({ payload }) => {
    const content = [
        <TextWrapper key="desc">
                <StyledHeader> {payload.app_owner_header} </StyledHeader>
                <StyledDescription> {payload.app_owner_description} </StyledDescription>
        </TextWrapper>,
        <ImageWrapper
            key="logo"
            src= {bannerImg}
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