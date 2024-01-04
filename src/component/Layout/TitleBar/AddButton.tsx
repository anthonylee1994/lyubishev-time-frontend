import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {MenuButton} from "./MenuButton.tsx";
import {useTagStore} from "../../../store/useTagStore.ts";
import {useLocation} from "react-router-dom";

export const AddButton = React.memo(() => {
    const location = useLocation();
    const setEditTagModal = useTagStore(state => state.setEditModal);

    const onClick = () => {
        if (location.pathname === "/tags") {
            setEditTagModal("new");
        }
    };

    return <MenuButton icon={<AddIcon />} onClick={onClick} />;
});
