import React, {useState} from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DatePicker = () => {
    const [day, setDay] = useState(0)
    const addDay = () => {
        setDay(+1)
    }
    const removeDay = () => {
        setDay(-1)
    }

    const threeDays = () => {

    }

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
            <button onClick={() => console.log(day)}>log</button>
            <IconButton
                onClick={removeDay}
                size={'small'}
                sx={{
                    p: 0,
                    m: 0,
                }}
            >
                <KeyboardArrowLeftIcon
                    sx={{
                        color: "#ADBFDF"
                    }}
                />
            </IconButton>
            <Button
                disabled
                variant={'text'}
                sx={{
                    p: 0,
                    m: 0,
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                    mx: "4px"
                }}
            >
                <CalendarTodayIcon
                    sx={{
                        color: "#ADBFDF",
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: "SF Pro Display",
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "100%",
                        letterSpacing: "0em",
                        color: 'black',
                        mx: "8px"
                    }}
                >
                    {day}
                </Typography>
            </Button>
            <IconButton
                onClick={addDay}
                size={'small'}
                sx={{
                    p: 0,
                    m: 0,
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