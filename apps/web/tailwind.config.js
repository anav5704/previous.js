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
                'infinite-scroll-left': 'scroll-left 50s linear infinite',
                'infinite-scroll-right': 'scroll-right 50s linear infinite',
            },
            keyframes: {
                'scroll-left': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                'scroll-right': {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' },
                },
            }
        },
    },
    plugins: [],
}
