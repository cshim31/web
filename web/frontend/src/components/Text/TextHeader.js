import styled from '@emotion/styled';

import constants from '../constants';

const StyledHeader = styled.div`
    font: ${constants.fontStyleLarge};
    font-weight: bold;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeMedium};
    }
`;

export default StyledHeader;