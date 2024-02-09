import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#224F34",
        primaryLight: "#C2EFD4",
        secondary: "#328B56",
        secondaryLight: "#267D49",
        black: "#454545",
        blackLight: "#373737",
        star: "#F5D426",
        active: "#10FF70"
      },
      fontFamily: {
        elephnt: ["ELEPHNT","ui-sans-serif","system-ui","sans-serif"],
        popbold: ["Poppins-Bold","ui-sans-serif","system-ui","sans-serif"],
        popmed: ["Poppins-Medium","ui-sans-serif","system-ui","sans-serif"],
        popreg: ["Poppins-Regular","ui-sans-serif","system-ui","sans-serif"],
        popsemi: ["Poppins-SemiBold","ui-sans-serif","system-ui","sans-serif"],
        robslab: ["RobotoSlab","ui-sans-serif","system-ui","sans-serif"],
        rufinabold: ["Rufina-Bold","ui-sans-serif","system-ui","sans-serif"],
        rufinareg: ["Rufina-Regular","ui-sans-serif","system-ui","sans-serif"],
      },
      fontSize: {
        h1: ["6.25rem", "6.625"],
        h2: ["5.375rem", "1"],
        h3: ["4rem", "1"],
        h4: ["3.125rem", "1"],
        h5: ["2.875rem", "1"],
        h6: ["2.5rem", "1"],
        h7: ["2rem", "1"],
        body1: ["1.25rem", "1"],
        body2: ["1.375rem", "1.43"],
        body3: ["1.5rem", "2.2"],
        body4: ["1.875rem", "1.5"],
      },
      borderRadius: {
        sm: "3px",
      },
      boxShadow: {
        buttonPrimary: "6px 33px 59px rgba(0, 0, 0, 0.3)",
        buttonSecondary: "0px 7px 30px rgba(0, 0, 0, 0.05)",
      }
    },
  },
  plugins: [],
};
export default config;
