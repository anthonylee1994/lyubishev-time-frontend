import React from "react";
import {MenuItem, TextField} from "@mui/material";
import {Field, useFormikContext} from "formik";
import {useTagStore} from "../../../store/useTagStore.ts";

export const FormContent = React.memo(() => {
    const formik = useFormikContext();
    const colors = useTagStore(state => state.colors);

    return (
        <form onSubmit={formik.handleSubmit} id="edit-tag-form">
            <Field name="name">
                {({field, meta}) => (
                    <TextField
                        autoFocus
                        fullWidth
                        variant="standard"
                        label="標籤名稱"
                        inputProps={{maxLength: 20}}
                        error={meta.touched && meta.error}
                        helperText={meta.touched && meta.error}
                        disabled={formik.isSubmitting}
                        {...field}
                    />
                )}
            </Field>

            <Field name="color_id">
                {({field, meta}) => (
                    <TextField
                        sx={{ mt: 2, bgcolor: colors.find(color => color.id === field.value)?.hexcode }}
                        select
                        fullWidth
                        label="顏色"
                        variant="filled"
                        disabled={formik.isSubmitting}
                        helperText={meta.touched && meta.error}
                        error={meta.touched && meta.error}
                        {...field}
                    >
                        {colors.map(color => (
                            <MenuItem
                                key={color.id}
                                value={color.id}
                                sx={{
                                    bgcolor: color.hexcode,
                                    "&:hover, &.focus, &.Mui-selected": {
                                        bgcolor: `${color.hexcode} !important`,
                                    },
                                }}
                            >
                                {color.name}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
            </Field>
        </form>
    );
});
