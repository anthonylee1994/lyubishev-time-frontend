import {ArrowUpward as ArrowUpwardIcon} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React from "react";

interface Props {
    items: {id: number}[];
    id: number;
    reorder: (ids: number[]) => Promise<void>;
}

export const UpButton = React.memo<Props>(({id, items, reorder}) => {
    const currentItemIndex = items.findIndex(_ => _.id === id);

    return (
        <IconButton
            aria-label="up"
            disabled={currentItemIndex === 0}
            onClick={async e => {
                e.stopPropagation();
                if (currentItemIndex === 0) return;
                const newItems = [...items];
                const temp = newItems[currentItemIndex];
                newItems[currentItemIndex] = newItems[currentItemIndex - 1];
                newItems[currentItemIndex - 1] = temp;
                await reorder(newItems.map(_ => _.id));
            }}
        >
            <ArrowUpwardIcon />
        </IconButton>
    );
});
