/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#ffffff',
                    dark: '#193366',
                },
                secondary: {
                    light: '#f8f9fa',
                    dark: '#0f1924',
                },
                accent: {
                    light: '#e9ecef',
                    dark: '#2d3e50',
                },
                blue: {
                    500: '#0066cc',
                    600: '#0052a3',
                    400: '#4a9eff',
                    300: '#6bb0ff',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
