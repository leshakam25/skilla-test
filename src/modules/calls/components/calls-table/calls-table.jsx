import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import CallsTableItem from "./calls-table-item.jsx";
import CallsTableHead from "./calls-table-head.jsx";
import Filter from "./calls-table-filter/filter.jsx";
import axios from "axios";


const CallsTable = () => {
    // Базовый адрес
    const api = 'https://api.skilla.ru/mango/getList';
    // Начальная дата. Формат YYYY-MM-DD
    const date_start = '2022-02-21';
    //Конечная дата. Формат YYYY-MM-DD
    const date_end = '2022-02-22';
    //Признак входящего или исходящего звонка, 1 - входящий, 0 - исходящий, пусто - все звонки
    const in_out = '';
    //Адрес с параметрами
    const apiUrl = api + "?date_start=" + date_start + "&date_end=" + date_end + "&in_out=" + in_out;

    const [callsList, setCallsList] = useState([]);

    const getCalls = () => (
        axios.post(
            apiUrl,
            {},
            {headers: {Authorization: `Bearer testtoken`}})
            .then(response => {
                setCallsList(response.data)
            })
    )

    useEffect(() => {
        getCalls()
    }, [])

    return (
        <Box sx={{mt: '20px'}}>
            <Filter/>
            <Box
                sx={{
                    background: '#fff',
                    pr: '40px'
                }}
            >
                <CallsTableHead/>
                {callsList &&
                    callsList.results &&
                    callsList.results.map((el, i) => (
                        <CallsTableItem
                            ket={i}
                            el={el}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default CallsTable;