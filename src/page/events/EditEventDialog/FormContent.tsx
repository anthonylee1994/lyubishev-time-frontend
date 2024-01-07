import {Box, Button, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Field, useFormikContext} from "formik";
import React from "react";
import {useEventStore} from "../../../store/useEventStore.ts";

export const FormContent = React.memo(() => {
    const formik = useFormikContext();
    const tags = useEventStore(state => state.tags);
    const editModal = useEventStore(state => state.editModal);

    const actionName = editModal === "new" ? "新增" : "修改";
    const setEditModal = useEventStore(state => state.setEditModal);

    const onClose = () => {
        setEditModal(false);
    };

    return (
        <form onSubmit={formik.handleSubmit} id="edit-event-form">
            <DialogTitle>{actionName}活動</DialogTitle>
            <DialogContent>
                <Field name="name">
                    {({field, meta}) => (
                        <TextField
                            multiline
                            autoFocus
                            fullWidth
                            variant="standard"
                            label="活動名稱 / 簡介"
                            inputProps={{maxLength: 1000}}
                            error={meta.touched && meta.error}
                            helperText={meta.touched && meta.error}
                            disabled={formik.isSubmitting}
                            {...field}
                        />
                    )}
                </Field>

                <Field name="tag_id">
                    {({field, meta}) => (
                        <TextField
                            size="small"
                            sx={{mt: 2}}
                            select
                            fullWidth
                            label="活動標籤"
                            variant="standard"
                            disabled={formik.isSubmitting}
                            helperText={meta.touched && meta.error}
                            error={meta.touched && meta.error}
                            SelectProps={{native: true}}
                            {...field}
                        >
                            {tags.map(tag => (
                                <option key={tag.id} value={tag.id}>
                                    {tag.name}
                                </option>
                            ))}
                        </TextField>
                    )}
                </Field>
                <Box display="flex" justifyContent="center" alignItems="flex-end">
                    <Field name="duration">
                        {({field, meta}) => (
                            <TextField
                                size="small"
                                sx={{mt: 2}}
                                fullWidth
                                label="佔用時間"
                                variant="standard"
                                defaultValue={5}
                                disabled={formik.isSubmitting}
                                error={meta.touched && meta.error}
                                {...field}
                            />
                        )}
                    </Field>
                    <Field name="duration_unit">
                        {({field, meta, form}) => (
                            <TextField
                                sx={{mt: 2, width: 100}}
                                select
                                size="small"
                                variant="standard"
                                SelectProps={{native: true}}
                                disabled={formik.isSubmitting}
                                helperText={meta.touched && meta.error}
                                error={meta.touched && meta.error}
                                defaultValue="minute"
                                {...field}
                                onChange={e => {
                                    e.preventDefault();
                                    const value = Number(form.values.duration);

                                    form.setFieldValue("duration_unit", e.target.value);

                                    Math.round(value);

                                    form.setFieldValue(
                                        "duration",
                                        form.values.duration_unit === "minute"
                                            ? Math.round((value / 60) * 100) / 100
                                            : value * 60
                                    );
                                }}
                            >
                                <option value="minute">分鐘</option>
                                <option value="hour">小時</option>
                            </TextField>
                        )}
                    </Field>
                </Box>
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
