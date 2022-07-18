import styled from '@emotion/styled';

import constants from '../constants';

const StyledHeader = styled.h1`
    font-size: ${constants.fontSizeLarge};
    font-weight: bold;
    white-space: pre-line;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeMedium};
    }
`;

export default StyledHeader;