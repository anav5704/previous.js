const { createGlobPatternsForDependencies } = require("@nx/react/tailwind")
const { join } = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            fontFamily: {
                GeistSans: ['var(--font-geist-sans)'],
                GeistMono: ['var(--font-geist-mono)'],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 10s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
