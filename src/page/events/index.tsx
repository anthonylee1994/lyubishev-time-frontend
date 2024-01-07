import RestoreIcon from "@mui/icons-material/Restore";
import React from "react";
import {AddButton} from "../../component/AddButton.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {Loading} from "../../component/Loading.tsx";
import {Page} from "../../component/Page.tsx";
import {useEventStore} from "../../store/useEventStore.ts";
import {DateSelect} from "../../component/DateSelect.tsx";
import {DeleteEventDialog} from "./DeleteEventDialog.tsx";
import {EditEventDialog} from "./EditEventDialog";
import {EventCard} from "./EventCard.tsx";

export const EventPage = React.memo(() => {
    const isFetching = useEventStore(state => state.isFetching);
    const events = useEventStore(state => state.events);

    const fetchEvents = useEventStore(state => state.fetchEvents);
    const fetchTags = useEventStore(state => state.fetchTags);

    const setEditModal = useEventStore(state => state.setEditModal);

    const date = useEventStore(state => state.date);
    const setDate = useEventStore(state => state.setDate);

    React.useEffect(() => {
        Promise.all([fetchEvents(), fetchTags()]);
    }, [fetchEvents, fetchTags]);

    return (
        <Page>
            <Loading show={isFetching} />
            <DateSelect date={date} setDate={setDate} />

            {!isFetching && events.length === 0 ? (
                <EmptyPlaceHolder Icon={RestoreIcon} modelName="活動記錄" />
            ) : (
                <React.Fragment>
                    {events.map(event => (
                        <EventCard key={event.id} item={event} />
                    ))}
                </React.Fragment>
            )}

            <DeleteEventDialog />
            <EditEventDialog />
            <AddButton onClick={() => setEditModal("new")} />
        </Page>
    );
});
