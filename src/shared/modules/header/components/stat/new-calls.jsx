import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";


const NewCalls = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "SF Pro Display",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                    }}
                >
                    Новые звонки &nbsp;
                </Typography>
                <Typography
                    color={"#00A775"}
                >
                    20 из 30 шт
                </Typography>
            </Box>
            <Box>
                <CardMedia
                    component="img"
                    alt="New Calls"
                    src={"https://i.postimg.cc/bNQczry4/new-calls.png"}
                />
            </Box>
        </Box>
    );
};

export default NewCalls;