/** @type {import('tailwindcss').Config} */

/*
 * REBRAND HERE.
 * Every colour on the site comes from these seven tokens.
 * Change the hex values, save, and the whole site updates.
 * Keep text tokens (ink, muted) dark enough for WCAG AA contrast on white.
 */
const brand = {
  primary: "#2563EB", // Buttons, links, key accents
  "primary-dark": "#1E40AF", // Hover states, text on soft blue
  "primary-soft": "#EAF1FF", // Tinted chips, icon wells, soft highlights
  ink: "#0F172A", // Headings and main text
  muted: "#475569", // Body copy and secondary text
  surface: "#F5F8FE", // Alternate section background
  border: "#DCE5F3", // Card and divider lines
};

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: brand,
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)",
        lift: "0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -20px rgba(37, 99, 235, 0.35)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
