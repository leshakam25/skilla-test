import React from 'react';
import {Box, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Find = () => {
    return (
        <Box
        sx={{
            width: '160px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'right',
            alignItems: 'center',
        }}
        >
            <IconButton
                sx={{
                    color:'#adbfdf'
                }}
            >
                <SearchIcon/>
            </IconButton>
        </Box>
    );
};

export default Find;