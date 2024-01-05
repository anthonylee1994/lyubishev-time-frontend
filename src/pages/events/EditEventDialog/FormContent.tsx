import {MenuItem, TextField} from "@mui/material";
import {Field, useFormikContext} from "formik";
import React from "react";
import {useEventStore} from "../../../store/useEventStore.ts";
import {TimeUtil} from "../../../util/TimeUtil.ts";

export const FormContent = React.memo(() => {
    const formik = useFormikContext();
    const tags = useEventStore(state => state.tags);

    return (
        <form onSubmit={formik.handleSubmit} id="edit-event-form">
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
                        sx={{
                            mt: 2,
                            bgcolor: tags.find(tag => tag.id === field.value)?.color.hexcode,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                        }}
                        select
                        fullWidth
                        label="活動標籤"
                        variant="filled"
                        disabled={formik.isSubmitting}
                        helperText={meta.touched && meta.error}
                        error={meta.touched && meta.error}
                        {...field}
                    >
                        {tags.map(tag => (
                            <MenuItem
                                key={tag.id}
                                value={tag.id}
                                sx={{
                                    bgcolor: tag.color.hexcode,
                                    "&:hover, &.focus, &.Mui-selected": {
                                        bgcolor: `${tag.color.hexcode} !important`,
                                    },
                                }}
                            >
                                {tag.name}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
            </Field>
            <Field name="minute">
                {({field, meta}) => (
                    <TextField
                        sx={{mt: 2}}
                        select
                        fullWidth
                        label="佔用時間"
                        variant="filled"
                        disabled={formik.isSubmitting}
                        helperText={meta.touched && meta.error}
                        error={meta.touched && meta.error}
                        {...field}
                    >
                        {TimeUtil.timeList.map(
                            time =>
                                time !== 0 && (
                                    <MenuItem key={time} value={time}>
                                        {TimeUtil.timeString(time)}
                                    </MenuItem>
                                )
                        )}
                    </TextField>
                )}
            </Field>
        </form>
    );
});
