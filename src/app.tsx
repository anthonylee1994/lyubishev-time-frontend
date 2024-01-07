import {ThemeProvider} from "@mui/material";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./component/Layout";
import {EventPage} from "./page/events";
import {LoginPage} from "./page/login";
import {SummaryPage} from "./page/summary";
import {TagsPage} from "./page/tags";
import {theme} from "./util/theme.ts";

export const App = React.memo(() => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<EventPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="tags" element={<TagsPage />} />
                        <Route path="summary" element={<SummaryPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});
