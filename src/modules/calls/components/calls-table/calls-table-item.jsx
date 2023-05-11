import React from 'react';
import {Avatar, Box, Checkbox} from "@mui/material";
import CallsTypeSelector from "./calls-type-selector.jsx";

const CallsTableItem = (el) => {
    return (
        <Box
            sx={{
                height: '65px',
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'left',
                alignItems: 'center',
            }}
        >
            <Checkbox/>
            <Box
                sx={{
                    width: '40px',
                    m:'0 auto',
                    ml:1
                }}
            >
                <CallsTypeSelector
                    el={el.el.in_out}
                />
            </Box>
            <Box
                sx={{
                    width: '90px',
                    m:'0 auto',
                }}
            >
                {el.el.date.substring(11)}
            </Box>
            <Box
                sx={{
                    m:'0 auto',
                    width: '90px'
                }}
            >
                <Avatar src={el.el.person_avatar}/>
            </Box>
            <Box
                sx={{
                    width: '250px',

                }}
            >
                +{el.el.partner_data.phone}
            </Box>
            <Box
                sx={{
                    width: '220px'
                }}
            >
                {el.el.partner_data.name}
            </Box>
            <Box>
                {el.results}
            </Box>
            <Box
                sx={{
                    width: '420px'
                }}
            >
                {el.time}
            </Box>
            {/*<button onClick={() => console.log("el", el.el)}>log</button>*/}
        </Box>
    );
};

export default CallsTableItem;