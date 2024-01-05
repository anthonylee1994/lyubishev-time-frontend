import React from "react";
import {useDrag, useDrop} from "react-dnd";
import {Identifier, XYCoord} from "dnd-core";

interface Props {
    id: number;
    index: number;
    children: React.ReactNode;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export const DraggableCard = React.memo<Props>(({id, index, moveCard, children}) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const [{handlerId}, drop] = useDrop<DragItem, void, {handlerId: Identifier | null}>({
        accept: "tag",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });

    const [{isDragging}, drag] = useDrag({
        type: "tag",
        item: () => {
            return {id: id, index};
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    const opacity = isDragging ? 0 : 1;

    return (
        <div ref={ref} data-handler-id={handlerId} style={{opacity, cursor: "move"}}>
            {children}
        </div>
    );
});
