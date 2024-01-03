import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TagsPage} from "./pages/tags";
import {LoginPage} from "./pages/login";
import {IndexPage} from "./pages/index/IndexPage.tsx";
import {Layout} from "./component/Layout";

export const App = React.memo(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="tags" element={<TagsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
});
