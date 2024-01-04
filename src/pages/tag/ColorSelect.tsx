import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const ColorSelect = React.memo(() => {
    return (
        <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
            <InputLabel>顏色</InputLabel>
            <Select label="顏色">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
});
