import {ThemeProvider} from "@mui/material";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./component/Layout";
import {EventPage} from "./pages/event";
import {LoginPage} from "./pages/login";
import {SummaryPage} from "./pages/summary";
import {TagsPage} from "./pages/tag";
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
