import styled from '@emotion/styled';

import constants from '../constants';
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';

const StyledDiv = styled.div`
    transition: ${constants.defaultTransition};
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <StyledDiv>
        <Header />
        <Banner />
        <Footer />
    </StyledDiv>
    
  );
}

export default App;
