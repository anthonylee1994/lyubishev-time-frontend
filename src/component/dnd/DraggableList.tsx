import React from "react";
import {DraggableCard} from "./DraggableCard.tsx";

interface Props<T extends {id: number}> {
    items: T[];
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    Card: React.NamedExoticComponent<{item: T}>;
}

export const DraggableList = <T extends {id: number}>({items, Card, moveCard}: Props<T>) => {
    const renderCard = (item: T, index: number) => {
        return (
            <DraggableCard index={index} key={item.id} id={item.id} moveCard={moveCard}>
                <Card item={item} />
            </DraggableCard>
        );
    };

    return <div>{items.map((item, index) => renderCard(item, index))}</div>;
};
