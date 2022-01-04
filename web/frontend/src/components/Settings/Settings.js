import React from "react";
import {
    IconButton,
    Menu,
} from '@mui/material';
import { 
    Settings as SettingsIcon,
} from '@mui/icons-material';

/*
* Childrens should be an each items that will be in settings menu
* Assume Menu already created in Settings
*/

const Settings = ({ children }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton
                id='setting-button'
                aria-label='settings'
                aria-controls='settings-appbar'
                aria-haspopup='true'
                onClick={handleClick}
                color='inherit'
            >
                <SettingsIcon />
            </IconButton>
            <Menu
                id="settings-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {children}
            </Menu>
        </div>
    );
};

export default Settings;