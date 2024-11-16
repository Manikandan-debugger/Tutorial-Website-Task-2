/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        bounceIn: "bounceIn 0.5s ease-in-out",
      },
      colors: {
        searchboxclr1: "#3023B2",
        searchboxclr2: "#7F56D9",
        sighnupbg1: "#083F9B",
        sighnupbg2: "#7F56D9",
        bluecolor: "#0E38CD",
        fontcolor: "#4883FF",
        topfontcolor: "#0E38CD",
        archbg: "#D9D9D9",
        naviconbg: "#2AAA94",
        primary: "#FFFFFF",
        gradient1: "#04016C",
        gradient2: "#4A16BD",
        gradient3: "#2E08C7",
        gradient4: "#7E08C7",
        gradient5: "#739FE8",
        gradient6: "#4F18CA",
        gradient7: "#D9ECFF",
        bgv1: "#DF385B",
        bgv2: "#5AB48E",
        bgv3: "#7F56D9",
        bgv4: "#FAB437",
        bgv5: "#2AAA94",
        bgv6: "#2CD182",
        rnb1: "#00B3FF",
        rnb2: "#1901F8",
        rnb3: "#E441FF",
        subscribe_btn: "#FFFAEC",
        playbtnbg: "#F5EBEB",
        playbtnrnmid: "#7F56D9",
        playbtnrnb1: "#7F56D9",
        playbtnrnb2: "#21B573",
        testtimonialbg1: "#DBEDFF",
        testtimonialbg2: "#DBEDFF",
        footerbg1: "#477AE3",
        footerbg2: "#931BBD",
        footerbottom1: "#0351AE",
        footerbottom2: "#A542C8",
        copyrightbg: "#001AFF",
      },
      boxShadow: {
        custom: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        bounceIn: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};



