const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            yt: ["Roboto", "Arial", "sans-serif"],
        },
        extend: {
            animation: {
                "button-click": "button-click ease-out 300ms",
            },
            keyframes: {
                "button-click": {
                    "0%": { backgroundColor: "#383838" },
                    "50%": { backgroundColor: "#565656" },
                    "100%": { backgroundColor: "#383838" },
                },
            },
            colors: {
                menu: "#212121",
                "menu-active": "#383838",
                "search-button": "#313131",
                "search-bar": "#121212",
                bg: "#181818",
                active: "#565656",
                "category-bar": "linear-gradient(to right, #fff, #fff)",
            },
            boxShadow: {
                right: "15px 0px 10px 5px #212121",
                left: "-15px 0px 10px 5px #212121",
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
