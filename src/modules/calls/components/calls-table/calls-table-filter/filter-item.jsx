import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Button, Typography} from "@mui/material";

const FilterItem = ({el}) => {
    return (
        <Button
            variant={'text'}
            sx={{
                fontFamily: "SF Pro Display",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                letterSpacing: "0em",
                color: '#5E7793',
                mx:"8px",
                textTransform:'none',
                opacity:0.87
            }}
        >
            <Typography>
                {el.name}
            </Typography>
            <KeyboardArrowDownIcon/>
        </Button>
    );
};

export default FilterItem;