/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ice: "#F4F7F9",
        brandGold: "#C9A35A",
        brandBronze: "#6B3F1D",
        eucalyptus: "#C9A35A",
        mist: "#D1DBE0",
        charcoal: "#2F3E46",
        charcoalSoft: "#354F52",
        ink: "#495E66",
        body: "#52606D",
      },
      fontFamily: {
        sans: [
          "Geist",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
        editorial: "0.18em",
      },
     boxShadow: {
  glass: "0 40px 80px -15px rgba(22, 21, 19, 0.08), 0 0 20px rgba(201, 163, 90, 0.05)",
  soft: "0 20px 50px -20px rgba(22, 21, 19, 0.10)",
},
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
