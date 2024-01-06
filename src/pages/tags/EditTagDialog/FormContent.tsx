import {Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Field, useFormikContext} from "formik";
import React from "react";
import {ColorPicker} from "./ColorPicker.tsx";
import {useTagStore} from "../../../store/useTagStore.ts";

export const FormContent = React.memo(() => {
    const formik = useFormikContext();
    const editModal = useTagStore(state => state.editModal);
    const actionName = editModal === "new" ? "新增" : "修改";

    const setEditModal = useTagStore(state => state.setEditModal);

    const onClose = () => {
        setEditModal(false);
    };

    return (
        <form onSubmit={formik.handleSubmit} id="edit-tag-form">
            <DialogTitle>{actionName}活動標籤</DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button disabled={formik.isSubmitting} onClick={onClose}>
                    取消
                </Button>
                <Button disabled={formik.isSubmitting} type="submit" variant="contained">
                    {actionName}
                </Button>
            </DialogActions>
        </form>
    );
});
