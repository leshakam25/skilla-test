import React from 'react';
import {Avatar, Box, Checkbox, Grid} from "@mui/material";
import CallsTypeSelector from "./calls-type-selector.jsx";

const CallsTableItem = (el) => {
    return (
        <Grid container
              sx={{
                  height: '65px',
                  width:'100%',
                  display: 'flex',
                  alignItems: 'center',
              }}
        >
            <Grid
                xs={0.35}
                sx={{
                }}
            >
                <Checkbox/>
            </Grid>
            <Grid
                xs={0.55}
                sx={{
                }}
            >
                <CallsTypeSelector
                    el={el.el.in_out}
                />
            </Grid>
            <Grid
                xs={0.85}
                sx={{
                }}
            >
                {el.el.date.substring(11)}
            </Grid>
            <Grid
                xs={1.4}
                sx={{
                }}
            >
                <Avatar src={el.el.person_avatar}/>
            </Grid>
            <Grid
                xs={3}
                sx={{
                }}
            >
                +{el.el.partner_data.phone}
            </Grid>
            <Grid
                xs={1.8}
                sx={{
                }}
            >
                {el.el.partner_data.name}
            </Grid>
            <Grid
                xs={1}
                sx={{
                }}
            >
                {el.results}
            </Grid>
            <Grid
                flexgrow={1}
            >
                {el.time}
            </Grid>
        </Grid>
    );
};

export default CallsTableItem;