module.exports = {
    mode: "jit",
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    darkMode: "class",
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./income/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                twitter: "#1DA1F2",
            },
            typography(theme) {
                return {
                    dark: {
                        css: {
                            color: theme("colors.gray.200"),
                            '[class~="lead"]': {
                                color: theme("colors.gray.300"),
                            },
                            a: { color: theme("colors.gray.100") },
                            strong: { color: theme("colors.gray.100") },
                            "ul > li::before": {
                                backgroundColor: theme("colors.gray.700"),
                            },
                            hr: { borderColor: theme("colors.gray.800") },
                            blockquote: {
                                color: theme("colors.gray.100"),
                                borderLeftColor: theme("colors.gray.100"),
                            },
                            h1: { color: theme("colors.gray.100") },
                            h2: { color: theme("colors.gray.100") },
                            h3: { color: theme("colors.gray.100") },
                            h4: { color: theme("colors.gray.100") },
                            code: { color: theme("colors.gray.100") },
                            "a code": { color: theme("colors.gray.100") },
                            pre: {
                                color: theme("colors.gray.200"),
                                backgroundColor: theme("colors.gray.800"),
                            },
                            thead: {
                                color: theme("colors.gray.100"),
                                borderBottomColor: theme("colors.gray.700"),
                            },
                            "tbody tr": {
                                borderBottomColor: theme("colors.gray.800"),
                            },
                        },
                    },
                };
            },
        },
    },
    variants: {
        extend: { typography: ["dark"], translate: ["group-hover"] },
    },
    plugins: [require("@tailwindcss/typography")],
};
