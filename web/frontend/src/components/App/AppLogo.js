
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

import constants from '../constants';

const StyledLink = styled(Link)`
  font-weight: ${constants.fontWeightMedium};
  color: ${constants.primaryTextColor};
  text-transform: uppercase;
  &:hover {
    color: ${constants.primaryTextColor};
    opacity: 0.6;
  }
`;

const AppLogo = ({ string, onClick }) => {
    return(
        <StyledLink aria-label='return to main page' to='/' onClick={onClick}>
            {string}
        </StyledLink>
    );
};

AppLogo.propTypes = {
    string: PropTypes.string,
    onClick: PropTypes.func,
};

export default AppLogo;