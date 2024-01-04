import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
} from "@mui/icons-material";
import {useTagStore} from "../../../store/useTagStore.ts";
import {TimeEventTag} from "../../../type/tag.ts";

interface Props {
    tag: TimeEventTag;
}

export const TagCard = React.memo<Props>(({tag}) => {
    const setEditModal = useTagStore(state => state.setEditModal);
    const setDeleteModal = useTagStore(state => state.setDeleteModal);

    const tags = useTagStore(state => state.tags);
    const reorderTags = useTagStore(state => state.reorderTags);

    const currentTagIndex = tags.findIndex(t => t.id === tag.id);

    return (
        <Box
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            m={1}
            borderRadius={4}
            bgcolor={tag.color.hexcode}
            color="white"
        >
            <Typography p={1}>{tag.name}</Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                bgcolor="rgb(0 0 0 / 20%)"
                width="100%"
                sx={{borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}
            >
                <div>
                    <IconButton
                        aria-label="up"
                        disabled={currentTagIndex === 0}
                        onClick={async () => {
                            if (currentTagIndex === 0) return;
                            const newTags = [...tags];
                            const temp = newTags[currentTagIndex];
                            newTags[currentTagIndex] = newTags[currentTagIndex - 1];
                            newTags[currentTagIndex - 1] = temp;
                            await reorderTags(newTags.map(t => t.id));
                        }}
                    >
                        <ArrowUpwardIcon
                            sx={{color: currentTagIndex === 0 ? "rgb(255 255 255 / 0.2)" : "white"}}
                        />
                    </IconButton>

                    <IconButton
                        aria-label="down"
                        disabled={currentTagIndex === tags.length - 1}
                        onClick={async () => {
                            if (currentTagIndex === tags.length - 1) return;
                            const newTags = [...tags];
                            const temp = newTags[currentTagIndex];
                            newTags[currentTagIndex] = newTags[currentTagIndex + 1];
                            newTags[currentTagIndex + 1] = temp;
                            await reorderTags(newTags.map(t => t.id));
                        }}
                    >
                        <ArrowDownwardIcon sx={{color: currentTagIndex === tags.length - 1 ? "rgb(255 255 255 / 0.2)" : "white"}} />
                    </IconButton>
                </div>

                <div>
                    <IconButton aria-label="edit" onClick={() => setEditModal(tag)}>
                        <EditIcon sx={{color: "white"}} />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => setDeleteModal(tag.id)}>
                        <DeleteIcon sx={{color: "white"}} />
                    </IconButton>
                </div>
            </Box>
        </Box>
    );
});
