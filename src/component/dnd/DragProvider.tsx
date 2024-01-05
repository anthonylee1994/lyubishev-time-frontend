import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

interface Props {
    children: React.ReactNode;
}

export const DragProvider = React.memo<Props>(({children}) => {
    return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
});
