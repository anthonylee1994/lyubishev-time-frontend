import {Dialog} from "@mui/material";
import {Formik} from "formik";
import React from "react";
import * as Yup from "yup";
import {useEventStore} from "../../../store/useEventStore.ts";
import {FormContent} from "./FormContent.tsx";

interface FormValues {
    name: string;
    tag_id?: number;
    duration: number;
    duration_unit: "minute" | "hour";
    order: number;
}

const EditSchema = Yup.object().shape({
    name: Yup.string().trim().required("必須填寫"),
    tag_id: Yup.number().required("必須填寫"),
    duration: Yup.number().required("必須填寫").min(1, "必須大於0"),
    duration_unit: Yup.string().required("必須填寫"),
});

export const EditEventDialog = React.memo(() => {
    const editModal = useEventStore(state => state.editModal);
    const eventsLength = useEventStore(state => state.events.length);
    const tags = useEventStore(state => state.tags);

    const setEditModal = useEventStore(state => state.setEditModal);
    const createEvent = useEventStore(state => state.createEvent);
    const editEvent = useEventStore(state => state.editEvent);
    const fetchEvents = useEventStore(state => state.fetchEvents);

    const initialValues = React.useMemo<FormValues>(() => {
        if (editModal === "new" || !editModal) {
            return {
                name: "",
                tag_id: tags[0]?.id,
                duration: 5,
                duration_unit: "minute",
                order: eventsLength,
            };
        }

        const isHour = editModal.minute >= 60 && editModal.minute % 60 === 0;

        return {
            name: editModal.name,
            tag_id: editModal.tag_id,
            duration: isHour ? editModal.minute / 60 : editModal.minute,
            duration_unit: isHour ? "hour" : "minute",
            order: editModal.order,
        };
    }, [editModal, eventsLength, tags]);

    const onClose = () => {
        setEditModal(false);
    };

    const onSubmit = async (values: FormValues, formikHelpers) => {
        if (editModal === false) {
            return;
        }

        if (editModal === "new") {
            await createEvent({
                ...values,
                minute: values.duration_unit === "hour" ? values.duration * 60 : values.duration,
            });
        } else {
            await editEvent({
                id: editModal.id,
                ...values,
                minute: values.duration_unit === "hour" ? values.duration * 60 : values.duration,
            });
        }

        formikHelpers.setSubmitting(false);
        setEditModal(false);
        await fetchEvents();
    };

    return (
        <Dialog fullWidth maxWidth="xs" open={editModal !== false} onClose={onClose}>
            <Formik validationSchema={EditSchema} initialValues={initialValues} onSubmit={onSubmit}>
                <FormContent />
            </Formik>
        </Dialog>
    );
});
