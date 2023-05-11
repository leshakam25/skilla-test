import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const Conversion = () => {
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
                    Конверсия в заказ &nbsp;
                </Typography>
                <Typography
                    color={'#EA1A4F'}
                >
                    67%
                </Typography>
            </Box>
            <Box>
                <CardMedia
                    component="img"
                    alt="New Calls"
                    src={"https://i.postimg.cc/MKkJ2VSy/conversion.png"}
                />
            </Box>
        </Box>
    );
};

export default Conversion;