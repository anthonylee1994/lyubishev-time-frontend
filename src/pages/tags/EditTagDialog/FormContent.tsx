import {TextField} from "@mui/material";
import {Field, useFormikContext} from "formik";
import React from "react";
import {ColorPicker} from "./ColorPicker.tsx";

export const FormContent = React.memo(() => {
    const formik = useFormikContext();

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
            <ColorPicker />
        </form>
    );
});
