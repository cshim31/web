import React from "react";
import styled from '@emotion/styled';
import bannerImg from '../../img/template.jpg'

const BannerDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    width: 100%;
    
    & img {
        max-width: 100%;
        min-height: 100px;
        max-height: 500px;
    }
`;

const Banner = () => {
    return (
        <BannerDiv>
            <img
                src= {bannerImg}
                alt="Developer vector"
            />
            <a href="http://www.freepik.com">Designed by Freepik</a>
        </BannerDiv>

    );
};

export default Banner;