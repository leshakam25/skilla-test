import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const BalanceButton = () => {
    return (
        <Box
            sx={{
                height: '40px',
                width: '145px',
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                borderRadius: '48px'
            }}
        >
            <Typography
                sx={{
                    fontFamily: "SF Pro Display",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "0em",
                    color: '#899CB1'
                }}
            >
                Баланс:
            </Typography>
            <Typography
                sx={{
                    fontFamily: "SF Pro Display",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "100%",
                    letterSpacing: "0em",
                    color: '#000'
                }}
            >
                272 P
            </Typography>
            <IconButton
                size={'small'}
                sx={{
                    background: '#005FF8',
                    ml: '10px',
                    width: '24px',
                    height: '24px',

                }}
            >
                <AddIcon
                    sx={{
                        color: 'white',
                        ":hover": {
                            color: 'black'
                        }
                    }}
                />
            </IconButton>
        </Box>
    );
};

export default BalanceButton;