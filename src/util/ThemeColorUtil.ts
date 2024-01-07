export const ThemeColorUtil = {
    setThemeColor: (color: string) => {
        window.setTimeout(() => {
            document.querySelector(`meta[name="theme-color"]`)?.setAttribute("content", color);
        }, 50);
    },
};
