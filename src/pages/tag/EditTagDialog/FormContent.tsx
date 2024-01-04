import React from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
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
                        error={Boolean(meta.touched && meta.error)}
                        helperText={meta.touched && meta.error}
                        disabled={formik.isSubmitting}
                        {...field}
                    />
                )}
            </Field>

            <Field name="color_id">
                {({field, meta}) => (
                    <FormControl
                        sx={{mt: 2}}
                        fullWidth
                        variant="standard"
                        error={Boolean(meta.touched && meta.error)}
                    >
                        <InputLabel>顏色</InputLabel>
                        <Select
                            label="顏色"
                            error={Boolean(meta.touched && meta.error)}
                            {...field}
                        >
                            {colors.map(color => (
                                <MenuItem
                                    key={color.id}
                                    value={color.id}
                                    sx={{
                                        bgcolor: color.hexcode,
                                        color: "white",
                                        "&:hover, &.Mui-selected": {
                                            bgcolor: `${color.hexcode} !important`,
                                            color: "white",
                                        },
                                    }}
                                >
                                    {color.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {meta.touched && meta.error && <FormHelperText>必須填寫</FormHelperText>}
                    </FormControl>
                )}
            </Field>
        </form>
    );
});
