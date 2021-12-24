import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import constants from '../constants';

const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7px 0 0 0;
`;

const StyledSpan = styled.span`
    font-weight: ${constants.fontWeightSmall};
    font-size: ${constants.fontSizeMini};
    color: ${constants.secondaryTextColor};
`;

const AppDescription = ({ description, name }) => {
    return (
        <DescriptionDiv>
            <StyledSpan>
                {description + ' - ' + name} 
            </StyledSpan>
        </DescriptionDiv>
    );
};

AppDescription.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string,
};

const mapStateToProps = (state) => ({
    description: state.metadata.payload.app_description,
    name: state.metadata.payload.app_owner_name,
});

export default connect(mapStateToProps)(AppDescription);