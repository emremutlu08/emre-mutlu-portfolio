module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-background":
          "linear-gradient(to right bottom,rgba(126,138, 151, 0.8), rgba(48, 71, 94, 0.4)),url('/images/myself/emre_mutlu-640x640.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "scale(1.2) rotate(7deg)",
          },
          "50%": {
            transform: "scale(0.8) rotate(-7deg)",
          },
        },
        moveInLeft: {
          "0%": {
            transform: "translateX(-10rem)",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(2rem)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        moveInRight: {
          "0%": {
            transform: "translateX(10rem)",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(-2rem)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: " wiggle 2s ease-out",
        moveInLeft: "moveInLeft 2s ease-out",
        moveInRight: "moveInRight 2s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
