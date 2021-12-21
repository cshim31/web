import styled from '@emotion/styled';

import constants from '../constants';
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    & a {
      &:hover {
        transition: ${constants.defaultTransition};
      }
    }
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    width: 100%;
    min-height: 1200px;
`;

function App() {
  return (
    <StyledDiv>
        <Header />
        <BodyWrapper>
          <Banner />
        </BodyWrapper>
        <Footer />
    </StyledDiv>
    
  );
}

export default App;
