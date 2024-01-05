import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import {TimeEventTag} from "../../type/tag.ts";
import {useTagStore} from "../../store/useTagStore.ts";

interface Props {
    item: TimeEventTag;
}

export const TagCard = React.memo<Props>(({item}) => {
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
            bgcolor={item.color.hexcode}
            sx={{}}
        >
            <Typography color={grey[800]} p={1}>
                {item.name}
            </Typography>
            <Box
                display="flex"
                justifyContent="flex-end"
                bgcolor="rgb(255 255 255 / 50%)"
                width="100%"
                sx={{borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}
            >
                <Box>
                    <IconButton aria-label="edit" onClick={() => setEditModal(item)}>
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => setDeleteModal(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
});
