import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        orbitron: ["Orbitron", "sans-serif"],
        homevideo: ["Home Video", "sans-serif"],
      },
      colors: {
        'sweetgrey': '#141414',
      },
    },
  },
  plugins: [],
};

export default config;