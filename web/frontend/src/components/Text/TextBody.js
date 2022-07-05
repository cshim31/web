import styled from '@emotion/styled';

import constants from '../constants';

const StyledDescription = styled.p`
    font-size: ${constants.fontSizeSemi};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeSmall};
    }
`;

export default StyledDescription;