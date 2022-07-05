import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import constants from '../constants';

const BannerDiv = styled.div`
    background-color: ${constants.defaultBackgroundColor};

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    & a {
        color: ${constants.defaultPrimaryTextColorSolid};
        &:hover {
            opacity: ${constants.defaultHoverTransparency};
        }
    }
`;

const Banner = ( props ) => {

    const content = props.content;

    return (
        <BannerDiv>
            {
                content
            }
        </BannerDiv>
    );
};

Banner.propTypes = {
    payload: PropTypes.arrayOf(PropTypes.element)
}

export default Banner;

