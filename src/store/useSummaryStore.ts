import {create} from "zustand";
import {apiClient} from "../util/apiClient.ts";
import {TimeEventTag} from "../type/tag.ts";
import {Color} from "../type/color.ts";

interface SummaryStore {
    isFetching: boolean;
    day: number;
    colors: Color[];
    tags: TimeEventTag[];
    summary: Record<number, number>;
    setDay: (day: number) => void;
    fetchTags: () => Promise<void>;
    fetchColors: () => Promise<void>;
    fetchSummary: () => Promise<void>;
}

export const useSummaryStore = create<SummaryStore>((set, get) => ({
    isFetching: false,
    day: 1,
    colors: [],
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
    fetchColors: async () => {
        set({isFetching: true});
        const response = await apiClient.get("/colors");
        set({colors: response.data, isFetching: false});
    },
}));
