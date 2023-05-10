import React from 'react';
import {Box, Button, SvgIcon, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";


const MenuItem = ({el}) => {

    const navigate = useNavigate()
    const goPath = () => navigate(el.path)
    return (
        <Button
            fullwidth
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
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 8L2.5 8.07L7.07 3.5C6.89 2.85 7.06 2.11 7.59 1.59C8.37 0.8 9.63 0.8 10.41 1.59C10.94 2.11 11.11 2.85 10.93 3.5L13.5 6.07L14 6C14.18 6 14.35 6 14.5 6.07L18.07 2.5C18 2.35 18 2.18 18 2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2C22 2.53043 21.7893 3.03914 21.4142 3.41421C21.0391 3.78929 20.5304 4 20 4C19.82 4 19.65 4 19.5 3.93L15.93 7.5C16 7.65 16 7.82 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421C15.0391 9.78929 14.5304 10 14 10C13.4696 10 12.9609 9.78929 12.5858 9.41421C12.2107 9.03914 12 8.53043 12 8L12.07 7.5L9.5 4.93C9.18 5 8.82 5 8.5 4.93L3.93 9.5L4 10C4 10.5304 3.78929 11.0391 3.41421 11.4142C3.03914 11.7893 2.53043 12 2 12C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10C0 9.46957 0.210714 8.96086 0.585786 8.58579C0.960859 8.21071 1.46957 8 2 8Z"
                    fill="#fff"/>
            </svg>
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