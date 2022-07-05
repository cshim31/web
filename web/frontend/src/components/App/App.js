import styled from '@emotion/styled';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Normalize from './Normalize';
import ScrollToTop from './ScrollToTop';
import constants from '../constants';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Introduction from '../Introduction';
import Experience from '../Experience';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

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
      <BrowserRouter>
        <ScrollToTop />
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/intro' element={<Introduction />} />
            <Route path='/exp' element={<Experience />} />
          </Routes>
      </BrowserRouter>
      <Footer />
  </StyledDiv>
    
  );
}

export default App;
