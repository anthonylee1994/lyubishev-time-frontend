import React from "react";
import {DeleteTagDialog} from "./DeleteTagDialog.tsx";
import {Page} from "../../component/Page.tsx";
import {useTagStore} from "../../store/useTagStore.ts";
import {Loading} from "../../component/Loading.tsx";
import {EditTagDialog} from "./EditTagDialog";
import {AddButton} from "../../component/AddButton.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {DraggableList} from "../../component/dnd/DraggableList.tsx";
import {TagCard} from "./TagCard.tsx";
import {DragProvider} from "../../component/dnd/DragProvider.tsx";

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
                <EmptyPlaceHolder modelName="活動標籤" />
            ) : (
                <DragProvider>
                    <DraggableList
                        items={tags}
                        Card={TagCard}
                        moveCard={(dragIndex, hoverIndex) => {
                            const dragCard = tags[dragIndex];
                            const hoverCard = tags[hoverIndex];

                            useTagStore.setState(state => {
                                const newTags = [...state.tags];
                                newTags[dragIndex] = hoverCard;
                                newTags[hoverIndex] = dragCard;
                                state.reorderTags(newTags.map(tag => tag.id));

                                return {tags: newTags};
                            });
                        }}
                    />
                </DragProvider>
            )}
            <DeleteTagDialog />
            <EditTagDialog />

            <AddButton onClick={() => setEditModal("new")} />
        </Page>
    );
});
