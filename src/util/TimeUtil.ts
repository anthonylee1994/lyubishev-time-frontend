export const TimeUtil = {
    timeList: [5, 10, 15, 30, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200],

    timeString(minute: number) {
        const hour = Math.floor(minute / 60);
        const min = minute % 60;
        return `${hour ? `${hour}小時` : ""}${min ? `${min}分鐘` : ""}`;
    },
};
