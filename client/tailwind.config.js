/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
            './src/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{html,jsx}',
		'./public/**/*.{html,jsx}',
		'./src/styles/**/*.{html,jsx}',	
      ],
	theme: {
		extend: {
			letterSpacing: {
				tightest: '-.075em',
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				small: '1px',
			},

			colors: {
				dark: '#030506',
				black: '#000000',
				pink: '#E31C5F',
				offwhite: '#fcfcfc',
				backdrop: 'rgba(10, 15, 19, 0.54)',
				text: '#33373A',
				greywhite: '#D9D9D9',
				ash: '#cecfd0',
				hover: '#EF709A'

			},

			fontWeight: {
				thin: '100',
				hairline: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			},

		

		},
	},
	plugins: [],
};