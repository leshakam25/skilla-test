import React from 'react';
import {Box} from "@mui/material";
import Logo from "./components/logo/logo.jsx";
import Menu from "./components/menu/menu.jsx";
import IconSelector from "./components/menu/icon-selector.jsx";

const Sidebar = () => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                boxShadow: 1,
                bgcolor: "#091335",

            }}
        >
            <IconSelector/>
            <Logo/>
            <Menu/>
        </Box>
    );
};

export default Sidebar;