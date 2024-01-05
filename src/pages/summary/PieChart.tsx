import React from "react";
import {Pie} from "react-chartjs-2";
import {useSummaryStore} from "../../store/useSummaryStore.ts";

export const PieChart = React.memo(() => {
    const tags = useSummaryStore(state => state.tags);
    const summary = useSummaryStore(state => state.summary);

    return (
        <Pie
            data={{
                labels: Object.keys(summary).map(
                    key => tags.find(tag => tag.id === Number(key))?.name
                ),
                datasets: [
                    {
                        label: "分鐘",
                        data: Object.values(summary),
                        backgroundColor: tags.map(tag => tag.color.hexcode),
                    },
                ],
            }}
        />
    );
});
