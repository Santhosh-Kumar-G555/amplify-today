// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v4 uses @tailwindcss/postcss as its PostCSS plugin (not the legacy 'tailwindcss' key)
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
export default config;
