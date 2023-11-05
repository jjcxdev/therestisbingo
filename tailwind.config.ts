import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        core: ["Core", ...fontFamily.sans],
        bingo: ["Bingo", ...fontFamily.sans],
        tenar: ["Tenar", ...fontFamily.sans],
      },
      fontSize: {
        vxs: "0.25em",
        xxxxs: "0.4em",
        xxxs: "0.5em",
        xxs: "1em",
        xs: "2em",
        sm: "3em",
        base: "4em",
        lg: "5em",
        xl: "6em",
        xxl: "7em",
        xxxl: "8em",
        xxxxl: "10em",
        vxl: "12iem",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "3840px",
      },
    },
  },
  plugins: [],
} satisfies Config;
