import React from 'react';
import {Grid, Table} from "@mui/material";
import DatePicker from "./components/date-picker/date-picker.jsx";
import BalanceButton from "./components/balance-button/balance-button.jsx";
import CallsTable from "./components/calls-table/calls-table.jsx";

const Calls = () => {
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    flexFlow: 'row nowrap'
                }}
            >
                <BalanceButton/>
                <DatePicker/>
            </Grid>
            <Grid
                item
                xs={12}
                minHeight="90vh"
            >
                <CallsTable/>
            </Grid>
        </Grid>
    );
};

export default Calls;