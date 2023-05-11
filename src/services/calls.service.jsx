// import {useState} from "react";
// import axios from "axios";
//
// const api = 'https://api.skilla.ru/mango/getList';
// // Начальная дата. Формат YYYY-MM-DD
// const date_start = '2022-02-14';
// //Конечная дата. Формат YYYY-MM-DD
// const date_end = '2022-02-22';
// //Признак входящего или исходящего звонка, 1 - входящий, 0 - исходящий, пусто - все звонки
// const in_out = '1';
// //Адрес с параметрами
// const apiUrl = api + "?date_start=" + date_start + "&date_end=" + date_end + "&in_out=" + in_out;
//
// const [callsList, setCallsList] = useState([]);
//
// export const getCalls = () => (
//     axios.post(
//         apiUrl,
//         {},
//         {headers: {Authorization: `Bearer testtoken`}})
// )