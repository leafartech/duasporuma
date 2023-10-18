import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "my": "#0A3712",
        "my2": "#363636",
        "my3": "#E4FFE5",
        "my4": "#76C479"
      },
      gridTemplateColumns: {
        "my": "64px 1fr"
      }
    },
  },
  plugins: [],
}
export default config
