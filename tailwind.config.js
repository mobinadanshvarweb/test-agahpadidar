/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        135: "135px",
        "-13": "-13px",
        "-24": "-24px",
        55: "55px",
        77: "77px",
        50: "50px",
      },
      backgroundColor: {
        mycustom: "#E9F0EF",
      },
      opacity: {
        81: "0.81",
      },
      transform: {
        "0deg": "rotate(0deg)",
      },
      textColor: {
        textlist: "#605850",
      },
      borderRadius: {
        "custom-1": "97.5px 0px 0px 0px",
        "custom-3": "89.5px 0px 0px 0px",
      },
      boxShadow: {
        "custom-1": "3px 6px 14px -2px #A2C0CD82",
        "custom-2": "-2px -1px 20px 0px #82A0AE91",
        "custom-inset": "-14px 2px 26px 0px #00000026",
      },
      backdropFilter: {
        "blur-3": "blur(3px)",
      },
      backgroundImage: {
        "custom-linear":
          "linear-gradient(180deg, rgba(155, 165, 220, 0.82) 6.62%, rgba(221, 244, 255, 0.48) 100%)",
        "custom-conic-gradient": `conic-gradient(from -71.3deg at 49.79% 50.21%, #93ADEE -123.75deg, rgba(129, 221, 251, 0.81) 73.13deg, rgba(156, 216, 229, 0.58) 127.5deg, rgba(161, 212, 228, 0.7) 166.87deg, #93ADEE 236.25deg, rgba(129, 221, 251, 0.81) 433.12deg)`,
        "custom-linear1":
          "linear-gradient(116.12deg, #00BDBD 27.88%, rgba(0, 189, 189, 0) 98.75%)",
      },
      borderWidth: {
        11: "11px",
      },
      colors: {
        "custom-gray": "#F2F2F2",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-conic-custom": {
          background: `conic-gradient(from -71.3deg at 49.79% 50.21%, #93ADEE -123.75deg, rgba(129, 221, 251, 0.81) 73.13deg, rgba(156, 216, 229, 0.58) 127.5deg, rgba(161, 212, 228, 0.7) 166.87deg, #93ADEE 236.25deg, rgba(129, 221, 251, 0.81) 433.12deg)`,
        },
        ".angle-0": {
          transform: "rotate(0deg)",
        },
      });
    }),
  ],
};
