import {Box, Fab} from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
    date: string;
    setDate: (date: string) => void;
}

export const DateSelect = React.memo(({date, setDate}: Props) => {
    return (
        <Box display="flex" alignItems="center" p={2} pb={0}>
            <Fab
                color="secondary"
                size="small"
                onClick={() => {
                    setDate(dayjs(date).subtract(1, "day").format("YYYY-MM-DD"));
                }}
                sx={{mr: 1}}
            >
                <ArrowBackIcon />
            </Fab>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{flex: 1}}
                    value={dayjs(date)}
                    onChange={date => {
                        date && setDate(date.format("YYYY-MM-DD"));
                    }}
                    slotProps={{
                        textField: {
                            size: "small",
                            fullWidth: true,
                            inputProps: {
                                sx: {
                                    textAlign: "center",
                                },
                            },
                        },
                    }}
                />
            </LocalizationProvider>
            <Fab
                color="secondary"
                size="small"
                onClick={() => {
                    setDate(dayjs(date).add(1, "day").format("YYYY-MM-DD"));
                }}
                sx={{ml: 1}}
            >
                <ArrowForwardIcon />
            </Fab>
        </Box>
    );
});
