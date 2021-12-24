
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const StyledLink = styled(Link)`
  font-weight: ${constants.fontWeightMedium};
  font-size: ${constants.fontSizeSemi};
  color: ${constants.defaultPrimaryTextColor};
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${constants.defaultPrimaryTextColor};
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

const mapStateToProps = (state) => ({
    string: state.metadata.payload.app_logo,
});

export default connect(mapStateToProps)(AppLogo);