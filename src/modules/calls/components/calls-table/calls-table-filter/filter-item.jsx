import React from 'react';
import {FormControl, InputBase, InputLabel, MenuItem, Select, styled} from "@mui/material";

const BootstrapInput = styled(InputBase)(({theme}) => ({
    '& .MuiInputBase-input': {
        width: '80px',
        position: 'relative',
        backgroundColor: 'inherit',
        fontSize: 16,
        fontFamily: [
            'Roboto',
        ].join(','),
    },
}));

const FilterItem = ({el}) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <InputLabel
                id="demo-simple-select-standard-label"
            >
                {el.name}
            </InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                variant={'filled'}
                value={value}
                onChange={handleChange}
                sx={{
                    minWidth: '130px',
                }}
                // input={<BootstrapInput/>}
            >
                {el && el.list && el.list.map((el, i) => (
                    <MenuItem
                        key={i}
                        value={el.value}
                    >
                        {el.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FilterItem;