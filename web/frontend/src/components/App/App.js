import styled from '@emotion/styled';

import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';

const HorizontalAlignDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

const SubDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    align-items: center;
    justify-content: center;
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <HorizontalAlignDiv>
        <Header />
        <MainDiv>
          <Banner />
        </MainDiv>
        <Footer />
    </HorizontalAlignDiv>
    
  );
}

export default App;
