/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp')
  ],
	// plugins: [require("@tailwindcss/ui")],
}
