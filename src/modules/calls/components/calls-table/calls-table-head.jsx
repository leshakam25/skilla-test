import React from 'react';
import {Avatar, Box, Checkbox, Grid, Typography} from "@mui/material";

const CallsTableHead = () => {
    return (
        <Grid container
              sx={{
                  height: '65px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
              }}
        >
            <Grid
                xs={0.35}
                sx={{}}
            >
                <Checkbox/>
            </Grid>
            <Grid
                xs={0.55}
                sx={{}}
            >
                <Typography>Тип</Typography>
            </Grid>
            <Grid
                xs={0.85}
                sx={{}}
            >
                <Typography>Время</Typography>
            </Grid>
            <Grid
                xs={1.4}
                sx={{}}
            >
                <Typography>Сотрудник</Typography>
            </Grid>
            <Grid
                xs={3}
                sx={{}}
            >
                <Typography>Звонок</Typography>
            </Grid>
            <Grid
                xs={1.8}
                sx={{}}
            >
                <Typography>Источник</Typography>
            </Grid>
            <Grid
                xs={1}
                sx={{}}
            >
                <Typography>Оценка</Typography>
            </Grid>
            <Grid
                flexgrow={1}
            >
                <Typography>Длительность</Typography>
            </Grid>
        </Grid>
    );
};

export default CallsTableHead;