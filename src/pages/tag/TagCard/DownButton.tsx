import React from "react";
import {ArrowDownward as ArrowDownwardIcon} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useTagStore} from "../../../store/useTagStore.ts";

interface Props {
    id: number;
}

export const DownButton = React.memo<Props>(({id}) => {
    const tags = useTagStore(state => state.tags);
    const currentTagIndex = tags.findIndex(t => t.id === id);
    const reorderTags = useTagStore(state => state.reorderTags);

    return (
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
            <ArrowDownwardIcon />
        </IconButton>
    );
});
