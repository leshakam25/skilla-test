import React from 'react';
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const settings = ['Профиль ', 'Аккаунт', 'Задачи', 'Выход'];

const User = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography>
                        ИП Сидорова Александра Михайловна
                    </Typography>
                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src=''/>
                    </IconButton>
                    <Tooltip title="Open settings">
                        <IconButton
                            onClick={handleOpenUserMenu}
                        >
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default User;