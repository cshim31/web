import React from "react";
import { MenuItem } from "@mui/material";

const ReportTab = () => {
    
    
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

export default ReportTab;