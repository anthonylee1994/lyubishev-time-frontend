import {AppBar, Box, Dialog, DialogContent, IconButton, Toolbar, Typography} from "@mui/material";
import React from "react";
import {SlideUpTransition} from "../../../component/transition/SlideUpTransition.tsx";
import {useTagStore} from "../../../store/useTagStore.ts";
import CloseIcon from "@mui/icons-material/Close";
import {EmptyPlaceHolder} from "../../../component/EmptyPlaceHolder.tsx";
import EventIcon from "@mui/icons-material/Event";
import {grey} from "@mui/material/colors";
import {Loading} from "../../../component/Loading.tsx";
import {TimeUtil} from "../../../util/TimeUtil.ts";

export const EventsDialog = React.memo(() => {
    const selectedTagId = useTagStore(state => state.selectedTagId);

    const tags = useTagStore(state => state.tags);
    const events = useTagStore(state => state.events);
    const currentTag = tags.find(tag => tag.id === selectedTagId);
    const isFetching = useTagStore(state => state.isFetching);

    const fetchEvents = useTagStore(state => state.fetchEvents);
    const setSelectTagId = useTagStore(state => state.setSelectTagId);

    console.log("events", events);

    const onClose = () => {
        setSelectTagId(null);
    };

    React.useEffect(() => {
        if (selectedTagId) {
            fetchEvents();
        }
    }, [fetchEvents, selectedTagId]);

    return (
        <Dialog
            fullScreen
            open={Boolean(selectedTagId)}
            onClose={onClose}
            TransitionComponent={SlideUpTransition}
        >
            <AppBar
                color="secondary"
                sx={{position: "relative", bgcolor: currentTag?.color.hexcode}}
            >
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                        {currentTag?.name || ""}
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent sx={{bgcolor: grey[50], p: 0}}>
                <Loading show={isFetching} />
                {!isFetching && events.length === 0 ? (
                    <EmptyPlaceHolder Icon={EventIcon} modelName="活動" />
                ) : (
                    <React.Fragment>
                        {events.map(event => (
                            <Box
                                borderRadius={3}
                                boxShadow={2}
                                overflow="hidden"
                                m={2}
                                bgcolor="white"
                                key={event.id}
                            >
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    bgcolor="grey.200"
                                    fontSize={14}
                                    p={1}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            color: grey[900],
                                        }}
                                    >
                                        {event.date}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            color: grey[900],
                                        }}
                                    >
                                        {TimeUtil.timeString(event.minute)}
                                    </Typography>
                                </Box>
                                <Box p={1}>{event.name}</Box>
                            </Box>
                        ))}
                    </React.Fragment>
                )}
            </DialogContent>
        </Dialog>
    );
});
