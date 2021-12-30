import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import constants from "../constants";

const HyperLink = (props) => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    font-weight: ${constants.fontWeightMedium};
    font-size: ${constants.fontSizeSmall};
    color: ${constants.defaultPrimaryRefColor};
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        color: ${constants.defaultPrimaryRefColor};
        opacity: 0.8;
    }
`;

export default HyperLink;