import React from "react";
import {MouseTransition, MultiBackend, TouchTransition} from "react-dnd-multi-backend";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";

interface Props {
    children: React.ReactNode;
}

const HTML5toTouch = {
    backends: [
        {
            id: "html5",
            backend: HTML5Backend,
            transition: MouseTransition,
        },
        {
            id: "touch",
            backend: TouchBackend,
            options: {enableMouseEvents: true},
            preview: true,
            transition: TouchTransition,
        },
    ],
};

export const DragProvider = React.memo<Props>(({children}) => {
    return (
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            {children}
        </DndProvider>
    );
});
