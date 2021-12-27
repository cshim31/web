import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bannerImg from '../../img/developer_wide.png';
import constants from '../constants';

const BannerDiv = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #D5F7E6;
    
    & img {
        max-width: 100%;
        min-height: 100px;
        max-height: 500px;
    }

    & a {
        color: ${constants.defaultPrimaryTextColorSolid};
        text-decoration: none;
        &:hover {
            color: ${constants.defaultPrimaryTextColorSolid};
            opacity: 0.6;
        }
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

const TextWrapper = styled.div`
    align-items: center;
    justify-content: center;
    font-size: ${constants.fontSizeMedium};
    color: ${constants.defaultPrimaryTextColor};
    margin: 0 100px 0 0;
    max-width: 31%;
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleLarge};
    font-weight: bold;
`;

const StyledDescription = styled.p`
    font: ${constants.fontStyleMedium};
`;

const Banner = ({ payload }) => {
    return (
        <BannerDiv>
            <TextWrapper>
                <StyledHeader> {payload.app_owner_header} </StyledHeader>
                <StyledDescription> {payload.app_owner_description} </StyledDescription>
            </TextWrapper>
            <ImageWrapper>
                <img
                    src= {bannerImg}
                    alt='Developer vector'
                />
            </ImageWrapper>
        </BannerDiv>

    );
};

Banner.propTypes = {
    payload: PropTypes.object,
}

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,
});

export default connect(mapStateToProps)(Banner);