/** @type {import('tailwindcss').Config} */
module.exports = {
    // Use the class strategy so `dark:` styles depend on the `.dark` class
    // (next-themes toggles this class) instead of the user's OS preference.
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
