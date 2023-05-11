import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const CallsQuality = () => {
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
                    Качество разговоров &nbsp;
                </Typography>
                <Typography
                    color={"#FFB800"}
                >
                    40%
                </Typography>
            </Box>
            <Box>
                <CardMedia
                    component="img"
                    alt="New Calls"
                    src={"https://i.postimg.cc/P5TGNHNJ/quality.png"}
                />
            </Box>
        </Box>
    );
};

export default CallsQuality;