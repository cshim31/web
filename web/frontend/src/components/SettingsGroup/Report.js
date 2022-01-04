import React from "react";
import { MenuItem } from "@mui/material";

const Report = () => {
    
    
    const onReportClick = () => {
        console.log('reported');
    };

    return(
        <MenuItem
            onClick={onReportClick}
        >
            Report
        </MenuItem>
    );
};

export default Report;