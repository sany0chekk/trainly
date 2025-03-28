import { create } from "twrnc";

const tw = create({
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#22c55e",
          light: "#4ade80",
          dark: "#16a34a",
        },
        background: {
          DEFAULT: "#222222",
          secondary: "#333333",
        },
        text: {
          DEFAULT: "#ffffff",
          secondary: "#afafaf",
        },
      },
    },
  },
});

export default tw;
