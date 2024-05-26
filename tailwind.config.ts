import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: 'hsl(246, 80%, 60%)',
				work: 'hsl(15, 100%, 70%)',
				play: 'hsl(195, 74%, 62%)',
				study: 'hsl(348, 100%, 68%)',
				exercise: 'hsl(145, 58%, 55%)',
				social: 'hsl(264, 64%, 52%)',
				'self-care': 'hsl(43, 84%, 65%)',
				'very-dark-blue': 'hsl(226, 43%, 10%)',
				'dark-blue': 'hsl(235, 46%, 20%)',
				'desaturated-blue': 'sl(235, 45%, 61%)',
				'pale-blue': 'hsl(236, 100%, 87%)',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
