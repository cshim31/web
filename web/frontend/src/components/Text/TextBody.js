import styled from '@emotion/styled';

import constants from '../constants';

const StyledDescription = styled.p`
    font: ${constants.fontStyleMedium};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeSemi};
    }
`;

export default StyledDescription;