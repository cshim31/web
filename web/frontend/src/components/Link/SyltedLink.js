import styled from '@emotion/styled';
import { Link } from "react-router-dom";

import constants from '../constants';

const StyledLink = styled(Link)`
    display: block;
    margin: 20px auto;
    width: 125px;
    height: 50px;
    font-family: ${constants.fontContentStyle};
    border: 1px solid ${constants.defaultBackgroundDenseColor};
    border-radius: 8px;
    color: ${constants.defaultBackgroundDenseColor};

    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 50px;
    
    &:hover {
        background: ${constants.defaultBackgroundDenseColor};
        color: ${constants.defaultPrimaryColor};
        opacity: 0.8;
    }

`;

export default StyledLink;