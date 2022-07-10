import styled from '@emotion/styled';

import constants from '../constants';

const StyledArticle = styled.article`
    margin: 80px auto 30px auto;
    padding: 40px;
    width: ${constants.extendedAppWidth};

    font-family: 'Roboto', sans-serif;

    @media only screen and (max-width: ${constants.extendedAppWidth}) {
        width: 100%;
    }
`


export default StyledArticle;