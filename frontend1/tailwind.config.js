/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "font-base": "'Poppins', sans-serif",
                "font-krona": "'Krona One', sans-serif",
            },
            colors: {
                dark: "#0C080B",
                green: "#1E3329",
                gold: "#CBA983",
                "dark-grey": "#B8B8B8",
                "light-grey": "#ECECEC",
                light: "#FAFAFA",
                pink: "#FED2D1",
            },
        },
    },
    plugins: [],
};
