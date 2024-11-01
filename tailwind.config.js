export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        pri: "#60a5fa",
        sec: "",
        err: "#b91c1c",
        neu: {
          1: "#9ca3af",
          2: "#374151",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
