import React from 'react';
import MenuItem from "./menuItem.jsx";
import {Box} from "@mui/material";
import {menuData} from "./menu.data.js";

const Menu = () => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}
        >
            {menuData && menuData.map((el, i) => (
                <MenuItem
                    key={i.id}
                    el={el}
                />
            ))}
        </Box>
    );
};

export default Menu;