import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import React from "react";
import {useTagStore} from "../../store/useTagStore.ts";

export const DeleteTagDialog = React.memo(() => {
    const deleteModal = useTagStore(state => state.deleteModal);
    const setDeleteModal = useTagStore(state => state.setDeleteModal);
    const deleteTag = useTagStore(state => state.deleteTag);
    const fetchTags = useTagStore(state => state.fetchTags);

    const onCloseDialog = () => {
        setDeleteModal(false);
    };

    const onDelete = async () => {
        if (deleteModal) {
            await deleteTag(deleteModal);
            onCloseDialog();
            await fetchTags();
        }
    };

    return (
        <Dialog open={Boolean(deleteModal)} onClose={onCloseDialog}>
            <DialogTitle>您是否確定要刪除此活動標籤?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    刪除活動標籤後，與此活動標籤相關的所有
                    <Typography component="span" fontWeight="bold" color="primary">
                        活動記錄
                    </Typography>
                    將會被刪除，且無法復原。
                </DialogContentText>
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
