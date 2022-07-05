import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import constants from '../constants';

const StyledDiv = styled.div`

`;

const SkillList = ({ strings }) => {
    return (
        <div></div>
    );
}


SkillList.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        header: PropTypes.string,
        description: PropTypes.string,
    })),
};

const Skill = ({ payload }) => {

    return (
        <StyledDiv>
            <SkillList  />
        </StyledDiv>
    );
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload, 
});

export default connect(mapStateToProps)(Skill);