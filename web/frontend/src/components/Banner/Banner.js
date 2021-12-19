import React from "react";
import styled from '@emotion/styled';
import { Button } from "@mui/material";


const HorizontalAlignDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

const Banner = () => {
    return (
        <HorizontalAlignDiv>
            <Button>{'This is Banner'}</Button>
        </HorizontalAlignDiv>

    );
};

export default Banner;