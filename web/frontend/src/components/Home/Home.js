import styled from '@emotion/styled';

import constants from '../constants';
import Banner from "./Banner";
import Skill from './Skill';
import Experience from './Experience';

const HomeContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: ${constants.containerHeightMedium};
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

export default Home;