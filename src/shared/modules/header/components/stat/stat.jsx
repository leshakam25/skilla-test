import React from 'react';
import {Box} from "@mui/material";
import NewCalls from "./new-calls.jsx";
import CallsQuality from "./calls-quality.jsx";
import Conversion from "./conversion.jsx";


const Stat = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '56px'
            }}
        >
            <NewCalls/>
            <CallsQuality/>
            <Conversion/>
        </Box>
    );
};

export default Stat;