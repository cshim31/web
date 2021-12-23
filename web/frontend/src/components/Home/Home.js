import styled from '@emotion/styled';
import {
    Card,
    CardContent
} from '@mui/material';

import constants from '../constants';
import Banner from "../Banner";
import Skill from './Skill';
import Experience from './Experience';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 100%;
    min-height: ${constants.ContainerHeightMedium};
    height: auto;
`;



const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Skill />
            <Experience />
        </HomeContainer>
    );
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,
});

export default Home;