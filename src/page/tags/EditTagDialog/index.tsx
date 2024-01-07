import {Dialog} from "@mui/material";
import {Formik} from "formik";
import React from "react";
import * as Yup from "yup";
import {useTagStore} from "../../../store/useTagStore.ts";
import {FormContent} from "./FormContent.tsx";

interface FormValues {
    name: string;
    color_id?: number;
    order: number;
}

const EditSchema = Yup.object().shape({
    name: Yup.string().trim().required("必須填寫"),
    color_id: Yup.number().required("必須填寫"),
});

export const EditTagDialog = React.memo(() => {
    const editModal = useTagStore(state => state.editModal);
    const tagsLength = useTagStore(state => state.tags.length);
    const colors = useTagStore(state => state.colors);

    const setEditModal = useTagStore(state => state.setEditModal);
    const createTag = useTagStore(state => state.createTag);
    const editTag = useTagStore(state => state.editTag);
    const fetchTags = useTagStore(state => state.fetchTags);

    const initialValues = React.useMemo<FormValues>(
        () =>
            editModal === "new" || !editModal
                ? {
                      name: "",
                      color_id: colors[0]?.id,
                      order: tagsLength,
                  }
                : {
                      name: editModal.name,
                      color_id: editModal.color_id,
                      order: editModal.order,
                  },
        [colors, editModal, tagsLength]
    );

    const onClose = () => {
        setEditModal(false);
    };

    const onSubmit = async (values: FormValues, formikHelpers) => {
        if (editModal === false) {
            return;
        }

        if (editModal === "new") {
            await createTag(values);
        } else {
            await editTag({
                id: editModal.id,
                ...values,
            });
        }
        formikHelpers.setSubmitting(false);
        setEditModal(false);
        await fetchTags();
    };

    return (
        <Dialog fullWidth maxWidth="xs" open={editModal !== false} onClose={onClose}>
            <Formik validationSchema={EditSchema} initialValues={initialValues} onSubmit={onSubmit}>
                <FormContent />
            </Formik>
        </Dialog>
    );
});
