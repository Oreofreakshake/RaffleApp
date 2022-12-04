/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            navy: "#0A192F",
            white: "#ffffff",
            black: "#000000",
            green: "#64ffda",
            slate: "#8892b0",
            lightslate: "#a8b2d1",
            midnavy: "#112240",
            lightnavy: "#233554",
            lightestslate: "#ccd6f6",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            mono: ["Roboto Mono", "SFMono-Regular"],
            mukta: ["Mukta", "sans-serif"],
        },

    },
    plugins: [],
};
