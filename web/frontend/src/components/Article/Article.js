import styled from '@emotion/styled';

import constants from '../constants';

const StyledArticle = styled.article`
    margin: 30px 0 30px 0;
    padding: 20px;
    width: ${constants.extendedAppWidth};

    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: ${constants.extendedAppWidth}) {
        width: 100%;
    }
`


export default StyledArticle;