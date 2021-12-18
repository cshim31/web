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

    return (
        <div>
            <IconButton
                aria-label='settings'
                aria-controls='settings-appbar'
                aria-haspopup='true'
                onClick={(e) => setAnchorEl(e.currentTarget)}
                color='inherit'
            >
                <SettingsIcon />
            </IconButton>
            <Menu
                id="settings-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={(e) => setAnchorEl(null)}
              >
                {children}
            </Menu>
        </div>
    );
};

export default Settings;