import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const IntroductionContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    min-height: ${constants.ContainerHeightMedium};
    height: auto;
`;

const Introduction = ({ payload }) => {
    return (
        <IntroductionContainer>{"dfkshfshdjkfdskj"}</IntroductionContainer>
    );
};

Introduction.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Introduction);