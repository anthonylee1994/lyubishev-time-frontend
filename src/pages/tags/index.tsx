import LocalOfferIconIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import {AddButton} from "../../component/AddButton.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {Loading} from "../../component/Loading.tsx";
import {Page} from "../../component/Page.tsx";
import {useTagStore} from "../../store/useTagStore.ts";
import {DeleteTagDialog} from "./DeleteTagDialog.tsx";
import {EditTagDialog} from "./EditTagDialog";
import {TagCard} from "./TagCard.tsx";

export const TagsPage = React.memo(() => {
    const isFetching = useTagStore(state => state.isFetching);
    const tags = useTagStore(state => state.tags);

    const fetchColors = useTagStore(state => state.fetchColors);
    const fetchTags = useTagStore(state => state.fetchTags);
    const setEditModal = useTagStore(state => state.setEditModal);

    React.useEffect(() => {
        Promise.all([fetchColors(), fetchTags()]);
    }, [fetchColors, fetchTags]);

    return (
        <Page>
            <Loading show={isFetching} />
            {!isFetching && tags.length === 0 ? (
                <EmptyPlaceHolder Icon={LocalOfferIconIcon} modelName="活動標籤" />
            ) : (
                <React.Fragment>
                    {tags.map(tag => (
                        <TagCard key={tag.id} item={tag} />
                    ))}
                </React.Fragment>
            )}
            <DeleteTagDialog />
            <EditTagDialog />

            <AddButton onClick={() => setEditModal("new")} />
        </Page>
    );
});
