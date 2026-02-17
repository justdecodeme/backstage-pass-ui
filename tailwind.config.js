/** @type {import('tailwindcss').Config} */
module.exports = {
	// 🌙 Dark mode via class — allows URL ?theme= override over system preference
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {},
	},
	plugins: [],
};
