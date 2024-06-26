import typography from '@tailwindcss/typography'

export default {
  plugins: [
    typography(),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#247BA0',
          secondary: '#F49FBC',
          accent: '#35BFA4',
        },
      },
      'dark',
    ],
  },
  theme: {
    extend: {
      colors: {
        text: {
          50: '#12070f',
          100: '#240f1d',
          200: '#491d3a',
          300: '#6d2c57',
          400: '#923a75',
          500: '#b64992',
          600: '#c56da8',
          700: '#d392bd',
          800: '#e2b6d3',
          900: '#f0dbe9',
          950: '#f8edf4',
          DEFAULT: '#0f060c',
        },
        bgbright: {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
          DEFAULT: '#FCFCFC',
        },
        bgdark: {
          50: '#0d0d0d',
          100: '#1a1a1a',
          200: '#333333',
          300: '#4d4d4d',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f2f2f2',
          DEFAULT: '#02111B',
        },
        primary: {
          50: '#051015',
          100: '#09202a',
          200: '#134053',
          300: '#1c607d',
          400: '#2680a6',
          500: '#2fa0d0',
          600: '#59b3d9',
          700: '#82c6e3',
          800: '#acd9ec',
          900: '#d5ecf6',
          950: '#eaf5fa',
          DEFAULT: '#247BA0',
        },
        secondary: {
          50: '#1a1200',
          100: '#332500',
          200: '#664900',
          300: '#996e00',
          400: '#cc9200',
          500: '#ffb700',
          600: '#ffc533',
          700: '#ffd466',
          800: '#ffe299',
          900: '#fff1cc',
          950: '#fff8e5',
          DEFAULT: '#F49FBC',
        },
        accent: {
          50: '#051411',
          100: '#0b2822',
          200: '#165044',
          300: '#217867',
          400: '#2ca089',
          500: '#37c8ab',
          600: '#5fd3bc',
          700: '#87decd',
          800: '#afe9dd',
          900: '#d7f4ee',
          950: '#ebfaf7',
          DEFAULT: '#35BFA4',
        },
      },
    },
  },
}
