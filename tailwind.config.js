const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            yt: ["Roboto", "Arial", "sans-serif"],
        },
        extend: {
            animation: {
                "button-click": "button-click 1s",
            },
            keyframes: {
                "button-click": {
                    "0%": { backgroundColor: "rgba(0,0,0,0)" },
                    "100%": { backgroundColor: "rgba(0,0,0,1)" },
                },
            },
            colors: {
                menu: "#212121",
                "menu-active": "#383838",
            },
        },
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({});
        }),
    ],
};
