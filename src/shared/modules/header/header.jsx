import React from 'react';
import {Box, Grid} from "@mui/material";
import DateNow from "./components/date-now/date-now.jsx";
import Stat from "./components/stat/stat.jsx";
import Find from "./components/find/find.jsx";
import User from "./components/user/user.jsx";

const Header = () => {
    return (
        <Box
            sx={{
                height: "64px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: 1,
                bgcolor: "#ffffff",
                px: {
                    xs: 0, md: "120px"
                },
            }}
        >
            <DateNow/>
            <Stat/>
            <Find/>
            <User/>
        </Box>
    );
};

export default Header;