const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            yt: ["Roboto", "Arial", "sans-serif"],
        },
        screens: {
            sm: "512px",
            md: "892px",
            lg: "1144px",
            xl: "1966px",
            "2xl": "2304px",
        },
        extend: {
            animation: {
                "button-click": "button-click ease-in-out 300ms",
                "aside-slide-in": "aside-slide-in 175ms",
                "aside-slide-out": "aside-slide-out 175ms",
            },
            keyframes: {
                "button-click": {
                    "0%": { backgroundColor: "#383838" },
                    "50%": { backgroundColor: "#565656" },
                    "100%": { backgroundColor: "#383838" },
                },
                "aside-slide-in": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "aside-slide-out": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            colors: {
                menu: "#212121",
                "menu-active": "#383838",
                "search-button": "#313131",
                "search-bar": "#121212",
                bg: "#181818",
                active: "#565656",
            },
            boxShadow: {
                right: "15px 0px 10px 5px #212121",
                left: "-15px 0px 10px 5px #212121",
            },
            fontSize: {
                "2xs": "0.625rem",
            },
            flexGrow: {
                4: 4,
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
                ".scrollbar-hide::-webkit-scrollbar": {
                    display: "none",
                },
            });
        }),
    ],
};
