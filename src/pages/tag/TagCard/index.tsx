import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import {useTagStore} from "../../../store/useTagStore.ts";
import {TimeEventTag} from "../../../type/tag.ts";
import {UpButton} from "./UpButton.tsx";
import {DownButton} from "./DownButton.tsx";
import {grey} from "@mui/material/colors";

interface Props {
    tag: TimeEventTag;
}

export const TagCard = React.memo<Props>(({tag}) => {
    const setEditModal = useTagStore(state => state.setEditModal);
    const setDeleteModal = useTagStore(state => state.setDeleteModal);

    return (
        <Box
            boxShadow={2}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            m={2}
            borderRadius={4}
            bgcolor={tag.color.hexcode}
        >
            <Typography color={grey[800]} p={1}>{tag.name}</Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                bgcolor="rgb(255 255 255 / 50%)"
                width="100%"
                sx={{borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}
            >
                <Box>
                    <UpButton id={tag.id} />
                    <DownButton id={tag.id} />
                </Box>

                <Box>
                    <IconButton aria-label="edit" onClick={() => setEditModal(tag)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => setDeleteModal(tag.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
});
