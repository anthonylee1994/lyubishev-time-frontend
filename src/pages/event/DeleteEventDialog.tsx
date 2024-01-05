import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";
import {useEventStore} from "../../store/useEventStore.ts";

export const DeleteEventDialog = React.memo(() => {
    const deleteModal = useEventStore(state => state.deleteModal);
    const setDeleteModal = useEventStore(state => state.setDeleteModal);
    const deleteEvent = useEventStore(state => state.deleteEvent);
    const fetchEvents = useEventStore(state => state.fetchEvents);

    const onCloseDialog = () => {
        setDeleteModal(false);
    };

    const onDelete = async () => {
        if (deleteModal) {
            await deleteEvent(deleteModal);
            onCloseDialog();
            await fetchEvents();
        }
    };

    return (
        <Dialog open={Boolean(deleteModal)} onClose={onCloseDialog}>
            <DialogTitle>您是否確定要刪除此活動?</DialogTitle>
            <DialogContent>
                <DialogContentText>刪除活動後將無法復原。</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>取消</Button>
                <Button variant="contained" onClick={onDelete} autoFocus>
                    確定刪除
                </Button>
            </DialogActions>
        </Dialog>
    );
});
