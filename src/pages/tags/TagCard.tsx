import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import {Box, IconButton, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import React from "react";
import {DownButton} from "../../component/order/DownButton.tsx";
import {UpButton} from "../../component/order/UpButton.tsx";
import {useTagStore} from "../../store/useTagStore.ts";
import {TimeEventTag} from "../../type/tag.ts";

interface Props {
    item: TimeEventTag;
}

export const TagCard = React.memo<Props>(({item}) => {
    const tags = useTagStore(state => state.tags);
    const reorderTags = useTagStore(state => state.reorderTags);

    const setEditModal = useTagStore(state => state.setEditModal);
    const setDeleteModal = useTagStore(state => state.setDeleteModal);

    return (
        <Box boxShadow={2} flexDirection="column" justifyContent="space-between" alignItems="center" display="flex" m={2} borderRadius={4} bgcolor={item.color.hexcode}>
            <Typography color={grey[800]} p={1} sx={{userSelect: "none"}}>
                {item.name}
            </Typography>
            <Box display="flex" justifyContent="space-between" bgcolor="rgb(255 255 255 / 50%)" width="100%" sx={{borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}>
                <Box>
                    <UpButton id={item.id} items={tags} reorder={reorderTags} />
                    <DownButton id={item.id} items={tags} reorder={reorderTags} />
                </Box>

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
