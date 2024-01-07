import React from "react";
import {Pie} from "react-chartjs-2";
import {useSummaryStore} from "../../store/useSummaryStore.ts";
import {TimeUtil} from "../../util/TimeUtil.ts";

export const PieChart = React.memo(() => {
    const tags = useSummaryStore(state => state.tags);
    const summary = useSummaryStore(state => state.summary);

    const summaryTags = Object.keys(summary).map(key => tags.find(tag => tag.id === Number(key)));
    const summaryMinutes = Object.values(summary);
    const colors = useSummaryStore(state => state.colors);

    return (
        <Pie
            data={{
                labels: summaryTags.map(tag => tag?.name),
                datasets: [
                    {
                        label: "分鐘",
                        data: summaryMinutes,
                        backgroundColor: colors.map(color => color.hexcode),
                    },
                ],
            }}
            options={{
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: tooltipItem => {
                                return TimeUtil.timeString(tooltipItem.parsed);
                            },
                        },
                    },
                },
            }}
        />
    );
});
