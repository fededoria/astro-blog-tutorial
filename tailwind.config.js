/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}"
    ],
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.2)', opacity: '0.7' },
                },
            },
            animation: {
                'pulse-custom': 'pulse 2s ease-in-out infinite',
            },
        },
    },

    plugins: [],
}
