import React from 'react';
import {Box, Typography} from "@mui/material";


const DateNow = () => {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();


    return (
        <Box>
            <Typography
                sx={{
                    color: "#899CB1",
                    fontFamily: "SF Pro Display",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    letterSpacing: "0em",
                }}
            >
              {dd + "." + mm + "." + yyyy}
            </Typography>
        </Box>
    );
};

export default DateNow;