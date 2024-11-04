export default {
  content: ["./src/**/*.scss", "./src/**/*.{js,ts,jsx,tsx,mdx,png}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: `url("/rightSide.png")`,
      },
      colors: {
        pri: "#60a5fa",
        sec: "",
        err: "#f87171",
        succ: "#22c55e",
        neu: {
          1: "#9ca3af",
          2: "#374151",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
