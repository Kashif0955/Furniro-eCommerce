// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** 
 *  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                   // Scans your HTML
    "./src/**/*.{js,ts,jsx,tsx}",      // Scans your JavaScript, TypeScript, JSX, and TSX files
  ],
  theme: {
    extend: {
      // Custom Colors
      colors: {
        primary: '#3490dc',           // Primary blue color
        secondary: '#ffed4a',         // Secondary yellow color
        customGray: '#6B7280',        // Custom gray color
      },
      backgroundImage: {
        "hero": "url(src/assets/images/hero.jpg)",
        "shop-hero": "url(src/assets/images/shop_hero.png)",
     },
      // Custom Font Sizes
      fontSize: {
        'xs': '.75rem',               // Extra small
        'sm': '.875rem',              // Small
        'base': '1rem',               // Base font size
        'lg': '1.125rem',             // Large
        'xl': '1.25rem',              // Extra large
        '2xl': '1.5rem',              // 2x large
      },
      // Custom Spacing
      spacing: {
        '128': '32rem',               // Custom large spacing
        '144': '36rem',
      },
      // Other potential extensions
      borderRadius: {
        'xl': '1.25rem',              // Custom border radius
      },
    },
  },
  // Plugins for additional functionality
  plugins: [
  
  ],
}
