import React from "react";
import {Page} from "../../component/Page";
import {useSummaryStore} from "../../store/useSummaryStore.ts";
import {Loading} from "../../component/Loading.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {PieChart} from "./PieChart.tsx";
import {Filter} from "./Filter.tsx";
import PieChartIcon from "@mui/icons-material/PieChart";
import {Box} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SummaryPage = React.memo(() => {
    const isFetching = useSummaryStore(state => state.isFetching);

    const fetchColors = useSummaryStore(state => state.fetchColors);
    const fetchTags = useSummaryStore(state => state.fetchTags);
    const fetchSummary = useSummaryStore(state => state.fetchSummary);

    const summary = useSummaryStore(state => state.summary);

    React.useEffect(() => {
        Promise.all([fetchColors(), fetchTags(), fetchSummary()]);
    }, [fetchColors, fetchSummary, fetchTags]);

    return (
        <Page>
            <Box
                width="100%"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                }}
            >
                <Loading show={isFetching} />
                <Filter />
                {!isFetching && Object.keys(summary).length === 0 ? (
                    <EmptyPlaceHolder Icon={PieChartIcon} modelName="統計數據" />
                ) : (
                    <Box mx="auto" width="80%" flex={1}>
                        <PieChart />
                    </Box>
                )}
            </Box>
        </Page>
    );
});
