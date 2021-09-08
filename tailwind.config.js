const { screens } = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1366px",
        // => @media (min-width: 1536px) { ... }
        ...screens,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
      //...
      scale: ["active", "group-hover"],
      //...
      opacity: ["disabled"],
    },
  },
};
