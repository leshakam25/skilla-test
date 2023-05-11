import React from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DatePicker = () => {
    return (
        <Box
            sx={{
                height: '24px',
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '48px',
                ml: '48px'
            }}
        >
            <IconButton
                size={'small'}
                sx={{
                    p:0,
                    m:0,
                }}
            >
                <KeyboardArrowLeftIcon
                    sx={{
                        color: "#ADBFDF"
                    }}
                />
            </IconButton>
            <Button
                variant={'text'}
                sx={{
                    p:0,
                    m:0,
                    display:'flex',
                    flexFlow:'row nowrap',
                    alignItems:'center',
                    mx:"4px"
                }}
            >
                <CalendarTodayIcon
                    sx={{
                        color:"#ADBFDF",
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: "SF Pro Display",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0em",
                        color: '#005FF8',
                        mx:"8px"
                    }}
                >
                    3 дня
                </Typography>
            </Button>
            <IconButton
                size={'small'}
                sx={{
                    p:0,
                    m:0,
                }}
            >
                <KeyboardArrowRightIcon
                    sx={{
                        color: "#ADBFDF"
                    }}
                />
            </IconButton>
        </Box>
    );
};

export default DatePicker;