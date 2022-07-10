import React from "react";
import { MenuItem } from "@mui/material";
import { connect } from 'react-redux';
import BugReportIcon from '@mui/icons-material/BugReport';

const Report = ({ payload }) => {
    
    
    const onReportClick = () => {
        window.location.href = payload.route_report;
    };

    return(
        <MenuItem
            onClick={onReportClick}
        >
            Report Bug
        </MenuItem>
    );
};

const mapStateToProps = (state) => ({
    payload: state.metadata.payload,    
});

export default connect(mapStateToProps)(Report);