const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

// default config - https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        zero: '0px',
        tiny: '350px',
        w460: '460px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        w1100: '1100px',
        xl: '1260px',
        w1350: '1350px',
        w1400: '1401px',
        '2xl': '1536px',
        collection: '1600px',
        w2000: '2000px',
        w2500: '2500px',
        w3000: '3000px',
      },
      color: {
        primary: "#FF0"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
