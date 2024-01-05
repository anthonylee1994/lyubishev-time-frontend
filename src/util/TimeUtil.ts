export const TimeUtil = {
    timeString(minute: number) {
        const hour = Math.floor(minute / 60);
        const min = minute % 60;
        return `${hour ? `${hour}小時` : ""}${min ? `${min}分鐘` : ""}`;
    },
};
