import React from "react";
import {Page} from "../../component/Page";
import {useSummaryStore} from "../../store/useSummaryStore.ts";
import {Loading} from "../../component/Loading.tsx";
import {EmptyPlaceHolder} from "../../component/EmptyPlaceHolder.tsx";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {PieChart} from "./PieChart.tsx";
import {Filter} from "./Filter.tsx";
import PieChartIcon from "@mui/icons-material/PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SummaryPage = React.memo(() => {
    const isFetching = useSummaryStore(state => state.isFetching);

    const fetchTags = useSummaryStore(state => state.fetchTags);
    const fetchSummary = useSummaryStore(state => state.fetchSummary);

    const summary = useSummaryStore(state => state.summary);

    React.useEffect(() => {
        Promise.all([fetchSummary(), fetchTags()]);
    }, [fetchSummary, fetchTags]);

    return (
        <Page>
            <Loading show={isFetching} />
            <Filter />
            {!isFetching && Object.keys(summary).length === 0 ? (
                <EmptyPlaceHolder Icon={PieChartIcon} modelName="統計數據" />
            ) : (
                <PieChart />
            )}
        </Page>
    );
});
