import styled from '@emotion/styled';

import constants from '../constants';
import Banner from "../Banner";

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 100%;
    min-height: ${constants.ContainerHeightMedium};
`;


const Home = () => {
    return (
        <BodyWrapper>
          <Banner />
        </BodyWrapper>
    );
};

export default Home;