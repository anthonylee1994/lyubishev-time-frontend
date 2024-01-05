import {create} from "zustand";
import {TimeEventTag} from "../type/tag.tsx";
import axios from "axios";
import {Color} from "../type/color.ts";

interface TagStore {
    isFetching: boolean;
    tags: TimeEventTag[];
    colors: Color[];
    fetchTags: () => Promise<void>;
    fetchColors: () => Promise<void>;

    createTag: (tag: Partial<TimeEventTag>) => Promise<void>;
    editTag: (tag: Partial<TimeEventTag>) => Promise<void>;
    deleteTag: (tagId: number) => Promise<void>;

    reorderTags: (ids: number[]) => Promise<void>;

    editModal: false | "new" | TimeEventTag;
    setEditModal: (editModal: false | "new" | TimeEventTag) => void;

    deleteModal: false | number;
    setDeleteModal: (deleteModal: false | number) => void;
}

export const useTagStore = create<TagStore>((set, get) => ({
    isFetching: false,
    tags: [],
    colors: [],
    editModal: false,
    deleteModal: false,
    setEditModal: (editModal: false | "new" | TimeEventTag) => set({editModal}),
    setDeleteModal: (deleteModal: false | number) => set({deleteModal}),
    fetchTags: async () => {
        set({isFetching: true});
        const response = await axios.get("/time_event_tags");
        set({tags: response.data, isFetching: false});
    },
    fetchColors: async () => {
        set({isFetching: true});
        const response = await axios.get("/colors");
        set({colors: response.data, isFetching: false});
    },
    createTag: async tag => {
        set({isFetching: true});
        await axios.post("/time_event_tags", tag);
        set({isFetching: false});
    },
    editTag: async tag => {
        set({isFetching: true});
        await axios.put(`/time_event_tags/${tag.id}`, tag);
        set({isFetching: false});
    },
    deleteTag: async tagId => {
        set({isFetching: true});
        await axios.delete(`/time_event_tags/${tagId}`);
        set({isFetching: false});
    },
    reorderTags: async (ids: number[]) => {
        set({isFetching: true});
        await axios.put("/time_event_tags/reorder", {ids});
        set({isFetching: false});
        await get().fetchTags();
    },
}));
