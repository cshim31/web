import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';



const Experience = ({ payload }) => {
    return (
        <div></div>
    );
};

Experience.propTypes = {
    payload: PropTypes.object,
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Experience);