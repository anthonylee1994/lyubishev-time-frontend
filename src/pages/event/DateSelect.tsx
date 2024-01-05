import {Box} from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {useEventStore} from "../../store/useEventStore.ts";

export const DateSelect = React.memo(() => {
    const date = useEventStore(state => state.date);
    const setDate = useEventStore(state => state.setDate);

    return (
        <Box p={2} pb={0}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{width: "100%"}}
                    value={dayjs(date)}
                    onChange={date => {
                        date && setDate(date.format("YYYY-MM-DD"));
                    }}
                />
            </LocalizationProvider>
        </Box>
    );
});
