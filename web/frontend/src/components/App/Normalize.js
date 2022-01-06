import { createGlobalStyle } from 'styled-components';
import constants from '../constants';

const Normalize = createGlobalStyle`

    html {
        overflow-x: hidden;
    }
    
    body {
        margin: 0;
        font-family: initial;
        height: initial;
        width: initial;
        overflow-x: hidden;
    }
`

export default Normalize;