import React from 'react';
import {Box, Typography} from "@mui/material";
import FilterItem from "./filter-item.jsx";
import SearchIcon from '@mui/icons-material/Search';

const filters = [
    {
        id: 0,
        name: "Все типы"
    },
    {
        id: 1,
        name: "Все сотрудники"
    },
    {
        id: 2,
        name: "Все звонки"
    },
    {
        id: 3,
        name: "Все источники"
    },
    {
        id: 4,
        name: "Все оценки"
    },
    {
        id: 5,
        name: "Все ошибки"
    },

]

const Filter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb:'7px'
            }}
        >
            <Box
                sx={{
                    color: '#ADBFDF',
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <SearchIcon/>
                <Typography
                sx={{
                    color:"#5E7793"
                }}
                >
                    Поиск по звонкам
                </Typography>
            </Box>
            <Box>
                {filters && filters.map((el, i) => (
                    <FilterItem
                        key={i + el.id}
                        el={el}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Filter;