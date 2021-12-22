import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import bannerImg from '../../img/template.png';
import constants from '../constants';

const BannerDiv = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${constants.defaultPrimaryGradient};
    
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

`;

const Banner = ({ bannerInfo }) => {
    return (
        <BannerDiv>
            <TextWrapper>
                <h3> {bannerInfo.header} </h3>
                {
                    bannerInfo.description.map((description) => {
                        return (
                            <p key={description.key}> {description.content} </p>
                        );
                    })
                }
            </TextWrapper>
            <ImageWrapper>
                <img
                    src= {bannerImg}
                    alt='Developer vector'
                />
                <a href='http://www.freepik.com'>Designed by Freepik</a>
            </ImageWrapper>
        </BannerDiv>

    );
};

Banner.propTypes = {
    bannerInfo: PropTypes.shape({
        header: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            content: PropTypes.string,
        })),
    }),
}

const mapStateToProps = (state) => ({
    bannerInfo: {
        header: state.metadata.payload.banner_header,
        description: state.metadata.payload.banner_description,
    } 
});

export default connect(mapStateToProps)(Banner);