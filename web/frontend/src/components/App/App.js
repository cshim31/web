import styled from '@emotion/styled';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Normalize from './Normalize';
import constants from '../constants';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    
    & a {
      text-decoration: none;
      &:hover {
        transition: ${constants.defaultTransition};
      }
    }
`;

function App() {
  return (
    <StyledDiv>
      <Normalize />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
  </StyledDiv>
    
  );
}

export default App;
