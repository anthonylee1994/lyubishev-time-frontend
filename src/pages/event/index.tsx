import RestoreIcon from "@mui/icons-material/Restore";
import React from "react";
import {AddButton} from "../../component/AddButton.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {Loading} from "../../component/Loading.tsx";
import {Page} from "../../component/Page.tsx";
import {DragProvider} from "../../component/dnd/DragProvider.tsx";
import {DraggableList} from "../../component/dnd/DraggableList.tsx";
import {useEventStore} from "../../store/useEventStore.ts";
import {DateSelect} from "./DateSelect.tsx";
import {DeleteEventDialog} from "./DeleteEventDialog.tsx";
import {EditEventDialog} from "./EditEventDialog";
import {EventCard} from "./EventCard.tsx";

export const EventPage = React.memo(() => {
    const isFetching = useEventStore(state => state.isFetching);
    const events = useEventStore(state => state.events);

    const fetchEvents = useEventStore(state => state.fetchEvents);
    const fetchTags = useEventStore(state => state.fetchTags);

    const setEditModal = useEventStore(state => state.setEditModal);

    React.useEffect(() => {
        Promise.all([fetchEvents(), fetchTags()]);
    }, [fetchEvents, fetchTags]);

    return (
        <Page>
            <DateSelect />
            <Loading show={isFetching} />

            {!isFetching && events.length === 0 ? (
                <EmptyPlaceHolder Icon={RestoreIcon} modelName="活動記錄" />
            ) : (
                <DragProvider>
                    <DraggableList
                        items={events}
                        Card={EventCard}
                        moveCard={(dragIndex, hoverIndex) => {
                            const dragCard = events[dragIndex];
                            const hoverCard = events[hoverIndex];

                            useEventStore.setState(state => {
                                const newEvents = [...state.events];
                                newEvents[dragIndex] = hoverCard;
                                newEvents[hoverIndex] = dragCard;
                                state.reorderEvents(newEvents.map(event => event.id));

                                return {events: newEvents};
                            });
                        }}
                    />
                </DragProvider>
            )}

            <DeleteEventDialog />
            <EditEventDialog />
            <AddButton onClick={() => setEditModal("new")} />
        </Page>
    );
});
