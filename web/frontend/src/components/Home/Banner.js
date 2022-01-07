import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bannerImg from '../../img/developer_wide.png';
import constants from '../constants';

const BannerDiv = styled.div`
    width: 100%;
    background-color: #D5F7E6;

    & a {
        color: ${constants.defaultPrimaryTextColorSolid};
        text-decoration: none;
        &:hover {
            color: ${constants.defaultPrimaryTextColorSolid};
            opacity: 0.6;
        }
    }
`;

const ContentDiv = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        padding-top: 75px;
    }
`;

const ImageWrapper = styled.img`
    min-height: 100px;
    max-height: 500px;
    max-width: 500px;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        max-width: 250px;
        max-height: 250px;
    }
`;

const TextWrapper = styled.div`
    font-size: ${constants.fontSizeMedium};
    color: ${constants.defaultPrimaryTextColor};
    max-width: 31%;
    
    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        max-width: 15%;
    }
`;

const StyledHeader = styled.div`
    font: ${constants.fontStyleLarge};
    font-weight: bold;

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeMedium};
    }
`;

const StyledDescription = styled.p`
    font: ${constants.fontStyleMedium};

    @media only screen and (max-width: ${constants.defaultAppWidth}) {
        font-size: ${constants.fontSizeSemi};
    }
`;

const Banner = ({ payload }) => {
    return (
        <BannerDiv>
            <ContentDiv>
                <TextWrapper>
                    <StyledHeader> {payload.app_owner_header} </StyledHeader>
                    <StyledDescription> {payload.app_owner_description} </StyledDescription>
                </TextWrapper>
                <ImageWrapper
                    src= {bannerImg}
                    alt='Website creator concept illustration'
                />
            </ContentDiv>
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