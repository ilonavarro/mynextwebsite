/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#f5f5f5',
        AuroMetalSaurus: '#747e7e',
        BlackCoffee: '#2C3232',
        JellyBeanBlue: '#3f7c85'
      },
      fontFamily: {
        prompt: ['var(--font-prompt)']
      }
    }
  },
  plugins: []
}

/*
--AuroMetalSaurus: #747e7e;
  --EletricBlue: #72f2eb;
  --RobinEggBlue: #00ccbf;
  --JellyBeanBlue: #3f7c85;
  --SunsetOrange: #ff5f5d;
  --black: #000000;
  --white: #ffffff;
*/
