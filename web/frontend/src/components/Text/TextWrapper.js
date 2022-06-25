import styled from '@emotion/styled';

import constants from '../constants';

const TextWrapper = styled.span`
    font-size: ${constants.fontSizeMedium};
    color: ${constants.defaultPrimaryTextColor};
    max-width:  36%;
    
    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        max-width: 50%;
        margin-top: 20%;
    }
`;


export default TextWrapper;