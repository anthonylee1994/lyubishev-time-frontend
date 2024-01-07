import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import {Box, IconButton, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import React from "react";
import {DownButton} from "../../component/order/DownButton.tsx";
import {UpButton} from "../../component/order/UpButton.tsx";
import {useEventStore} from "../../store/useEventStore.ts";
import {TimeEvent} from "../../type/event.ts";
import {TimeUtil} from "../../util/TimeUtil.ts";

interface Props {
    item: TimeEvent;
}

export const EventCard = React.memo<Props>(({item}) => {
    const events = useEventStore(state => state.events);
    const reorderEvents = useEventStore(state => state.reorderEvents);

    const setEditModal = useEventStore(state => state.setEditModal);
    const setDeleteModal = useEventStore(state => state.setDeleteModal);

    return (
        <Box
            boxShadow={2}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            m={2}
            borderRadius={4}
            bgcolor="white"
            position="relative"
        >
            <Box
                sx={{
                    width: "100%",
                    bgcolor: item.color.hexcode,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    textAlign: "center",
                }}
            >
                <Typography color={grey[800]} p={1} sx={{userSelect: "none"}}>
                    {item.tag.name}
                </Typography>
            </Box>
            <Box p={2} sx={{wordBreak: "break-all"}}>
                {item.name}
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="grey.100"
                width="100%"
                sx={{borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}
            >
                <Box>
                    <UpButton id={item.id} items={events} reorder={reorderEvents} />
                    <DownButton id={item.id} items={events} reorder={reorderEvents} />
                </Box>

                <Box sx={{color: grey[800], fontWeight: "bold"}}>
                    已用{TimeUtil.timeString(item.minute)}
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
