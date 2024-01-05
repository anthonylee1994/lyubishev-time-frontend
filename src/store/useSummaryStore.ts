import {create} from "zustand";
import {apiClient} from "../util/apiClient.ts";
import {TimeEventTag} from "../type/tag.ts";

interface SummaryStore {
    isFetching: boolean;
    day: number;
    tags: TimeEventTag[];
    summary: Record<number, number>;
    setDay: (day: number) => void;
    fetchTags: () => Promise<void>;
    fetchSummary: () => Promise<void>;
}

export const useSummaryStore = create<SummaryStore>((set, get) => ({
    isFetching: false,
    day: 1,
    tags: [],
    summary: {},
    setDay: day => {
        set({day});
        get().fetchSummary();
    },
    fetchSummary: async () => {
        set({isFetching: true});
        const response = await apiClient.get("/summary", {params: {day: get().day}});
        set({summary: response.data, isFetching: false});
    },
    fetchTags: async () => {
        set({isFetching: true});
        const response = await apiClient.get("/time_event_tags");
        set({tags: response.data, isFetching: false});
    },
}));
