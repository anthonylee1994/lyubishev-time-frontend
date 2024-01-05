import axios from "axios";
import {create} from "zustand";
import {TimeEvent} from "../type/event.ts";
import {TimeEventTag} from "../type/tag.ts";
import dayjs from "dayjs";

interface EventStore {
    isFetching: boolean;
    events: TimeEvent[];
    tags: TimeEventTag[];
    date: string;
    setDate: (date: string) => void;

    fetchEvents: () => Promise<void>;
    fetchTags: () => Promise<void>;

    createEvent: (event: Partial<TimeEvent>) => Promise<void>;
    editEvent: (event: Partial<TimeEvent>) => Promise<void>;
    deleteEvent: (eventId: number) => Promise<void>;

    reorderEvents: (ids: number[]) => Promise<void>;

    editModal: false | "new" | TimeEvent;
    setEditModal: (editModal: false | "new" | TimeEvent) => void;

    deleteModal: false | number;
    setDeleteModal: (deleteModal: false | number) => void;
}

export const useEventStore = create<EventStore>((set, get) => ({
    isFetching: false,
    events: [],
    tags: [],
    date: dayjs().format("YYYY-MM-DD"),
    setDate: date => {
        set({date});
        get().fetchEvents();
    },
    editModal: false,
    deleteModal: false,
    setEditModal: (editModal: false | "new" | TimeEvent) => set({editModal}),
    setDeleteModal: (deleteModal: false | number) => set({deleteModal}),
    fetchEvents: async () => {
        set({isFetching: true});
        const response = await axios.get("/time_events", {params: {date: get().date}});
        set({events: response.data, isFetching: false});
    },
    fetchTags: async () => {
        set({isFetching: true});
        const response = await axios.get("/time_event_tags");
        set({tags: response.data, isFetching: false});
    },
    createEvent: async event => {
        set({isFetching: true});
        await axios.post("/time_events", {
            ...event,
            date: get().date,
        });
        set({isFetching: false});
    },
    editEvent: async event => {
        set({isFetching: true});
        await axios.put(`/time_events/${event.id}`, event);
        set({isFetching: false});
    },
    deleteEvent: async eventId => {
        set({isFetching: true});
        await axios.delete(`/time_events/${eventId}`);
        set({isFetching: false});
    },
    reorderEvents: async (ids: number[]) => {
        set({isFetching: true});
        await axios.put("/time_events/reorder", {ids});
        set({isFetching: false});
        await get().fetchEvents();
    },
}));
