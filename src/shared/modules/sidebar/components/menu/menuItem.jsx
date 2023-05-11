import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import IconSelector from "./icon-selector.jsx";


const MenuItem = ({el}) => {

    const navigate = useNavigate()
    const goPath = () => navigate(el.path)
    return (
        <Button
            fullwidth={'true'}
            onClick={goPath}
            sx={{
                opacity: 0.6,
                m: 0,
                p: '16px',
                width: '100%',
                textTransform: 'none',
                height: '52px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                alignItems: 'center',
                ":focus": {

                    fill: '#000',
                    opacity: 1,
                    bgcolor: '#4B5675'
                }
            }}
        >
            <Box
                sx={{
                    width: '22px',
                    height: '22px'
                }}
            >
                <IconSelector el={el.name}/>
            </Box>
            <Typography
                sx={{
                    pl: '12px',
                    fontFamily: "SF Pro Display",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                }}
            >
                {el.name}
            </Typography>
            {/*<SvgIcon>*/}
            {/*    {el.icon}*/}
            {/*</SvgIcon>*/}
        </Button>
    );
};

export default MenuItem;