import React from 'react';
import {Box, Checkbox, Typography} from "@mui/material";


const tableHeads = [
    {
        id: 0,
        name: "Тип",
        width:'60px'
    },
    {
        id: 1,
        name: "Время",
        width:'90px'

    },
    {
        id: 2,
        name: "Сотрудник",
        width:'120px'
    },
    {
        id: 3,
        name: "Звонок",
        width:'300px'
    },
    {
        id: 4,
        name: "Источник",
        width:'220px'
    },
    {
        id: 5,
        name: "Оценка",
        width:'420px'
    },
    {
        id: 6,
        name: "Длительность",
    }
]

const CallsTableHead = () => {
    return (
        <Box
        sx={{
            display:'flex',
            flexFlow:'row nowrap',
            alignItems:'center',
            height:'65px',
            justifyContent:'left'
        }}
        >
            <Checkbox />
            {tableHeads && tableHeads.map((el,i)=>(
                <Typography
                key={i+el.id}
                sx={{
                    fontFamily: "SF Pro Display",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    color: '#899CB1',
                    width: el.width
                }}
                >
                    {el.name}
                </Typography>
            ))}
        </Box>
    );
};

export default CallsTableHead;