module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      boxShadow: {
        sm: "0px 0px 6px ",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#61476c",

          secondary: "#e3dae7",

          accent: "#856194",

          neutral: "#060406",

          "base-100": "#f8f6f9",

          info: "#6091e2",

          success: "#24b790",

          warning: "#e89e26",

          error: "#e87d88",
        },
        dark: {
          primary: "#ad93b8",

          secondary: "#211825",

          accent: "#8f6b9e",

          neutral: "#fbf9fb",

          "base-100": "#080609",

          info: "#6091e2",

          success: "#24b790",

          warning: "#e89e26",

          error: "#e87d88",
        },
      },
    ],
  },
};
