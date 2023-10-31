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
        "5xs": "clamp(0.3rem, 1.2vw, 0.4rem)",
        "4xs": "clamp(0.35rem, 1.35vw, 0.45rem)",
        "3xs": "clamp(0.4rem, 1.5vw, 0.5rem)",
        "2xs": "clamp(0.5rem, 1.8vw, 0.6rem)",
        xs: "clamp(0.6rem, 2vw, 0.75rem)",
        sm: "clamp(0.7rem, 2.5vw, 0.875rem)",
        base: "clamp(0.8rem, 3vw, 1rem)",
        lg: "clamp(0.9rem, 3.5vw, 1.125rem)",
        xl: "clamp(1rem, 4vw, 1.25rem)",
        "2xl": "clamp(1.2rem, 4.5vw, 1.5rem)",
        "3xl": "clamp(1.5rem, 5vw, 1.875rem)",
        "4xl": "clamp(1.8rem, 5.5vw, 2.25rem)",
        "5xl": "clamp(2.5rem, 6vw, 3rem)",
        "6xl": "clamp(3rem, 6.5vw, 4rem)",
        "7xl": "clamp(4rem, 7vw, 5rem)",
        "8xl": "clamp(5rem, 7.5vw, 6rem)",
        "9xl": "clamp(6rem, 8vw, 8rem)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "3840px",
      },
    },
  },
  plugins: [],
} satisfies Config;
