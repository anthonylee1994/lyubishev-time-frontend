import React from "react";
import {TagCard} from "./TagCard";
import {DeleteTagDialog} from "./DeleteTagDialog.tsx";
import {Page} from "../../component/Page.tsx";
import {useTagStore} from "../../store/useTagStore.ts";
import {Loading} from "../../component/Loading.tsx";
import {EditTagDialog} from "./EditTagDialog";
import {AddButton} from "../../component/AddButton.tsx";

export const TagsPage = React.memo(() => {
    const isFetching = useTagStore(state => state.isFetching);
    const tags = useTagStore(state => state.tags);

    const fetchColors = useTagStore(state => state.fetchColors);
    const fetchTags = useTagStore(state => state.fetchTags);
    const setEditModal = useTagStore(state => state.setEditModal);

    React.useEffect(() => {
        Promise.all([fetchColors(), fetchTags()]);
    }, [fetchTags]);

    return (
        <Page>
            <Loading show={isFetching} />
            {tags.map(tag => (
                <TagCard key={tag.id} tag={tag} />
            ))}
            <DeleteTagDialog />
            <EditTagDialog />

            <AddButton onClick={() => setEditModal("new")} />
        </Page>
    );
});