import React from "react";
import {Box, Chip} from "@mui/material";
import {useTagStore} from "../../../store/useTagStore.ts";
import {Field} from "formik";

export const ColorPicker = React.memo(() => {
    const colors = useTagStore(state => state.colors);

    return (
        <Field name="color_id" as="select">
            {({field, form}) => (
                <Box display="flex" flexWrap="wrap" sx={{mt: 2}} justifyContent="center">
                    {colors.map(color => (
                        <Chip
                            key={color.id}
                            label={color.name}
                            clickable
                            onClick={() => form.setFieldValue(field.name, color.id)}
                            sx={{
                                m: 0.5,
                                bgcolor: color.hexcode,
                                borderWidth: 2,
                                borderColor:
                                    color.id === field.value ? "primary.main" : "transparent",
                                borderStyle: "solid",
                                "&:hover, &.focus, &.Mui-selected": {
                                    bgcolor: `${color.hexcode} !important`,
                                },
                            }}
                        />
                    ))}
                </Box>
            )}
        </Field>
    );
});
