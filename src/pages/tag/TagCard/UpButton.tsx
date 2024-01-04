import {ArrowUpward as ArrowUpwardIcon} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React from "react";
import {useTagStore} from "../../../store/useTagStore.ts";

interface Props {
    id: number;
}

export const UpButton = React.memo<Props>(({id}) => {
    const tags = useTagStore(state => state.tags);
    const currentTagIndex = tags.findIndex(t => t.id === id);
    const reorderTags = useTagStore(state => state.reorderTags);

    return (
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
            <ArrowUpwardIcon />
        </IconButton>
    );
});
