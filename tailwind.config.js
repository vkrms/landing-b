/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom color palette
        gunmetal: { 
          DEFAULT: '#2d3142', 
          100: '#090a0d', 
          200: '#12141b', 
          300: '#1b1e28', 
          400: '#242735', 
          500: '#2d3142', 
          600: '#4e5472', 
          700: '#71799e', 
          800: '#a0a6bf', 
          900: '#d0d2df' 
        },
        white: { 
          DEFAULT: '#ffffff', 
          100: '#333333', 
          200: '#666666', 
          300: '#999999', 
          400: '#cccccc', 
          500: '#ffffff', 
          600: '#ffffff', 
          700: '#ffffff', 
          800: '#ffffff', 
          900: '#ffffff' 
        },
        coral: { 
          DEFAULT: '#ef8354', 
          100: '#3b1505', 
          200: '#762b0b', 
          300: '#b04010', 
          400: '#e95718', 
          500: '#ef8354', 
          600: '#f29a75', 
          700: '#f5b497', 
          800: '#f9cdba', 
          900: '#fce6dc' 
        },
        "payne-gray": { 
          DEFAULT: '#4f5d75', 
          100: '#101217', 
          200: '#1f252e', 
          300: '#2f3745', 
          400: '#3f4a5c', 
          500: '#4f5d75', 
          600: '#687a99', 
          700: '#8e9bb2', 
          800: '#b4bdcc', 
          900: '#d9dee5' 
        },
        "battleship-gray": { 
          DEFAULT: '#76877d', 
          100: '#181b19', 
          200: '#2f3732', 
          300: '#47524c', 
          400: '#5f6d65', 
          500: '#76877d', 
          600: '#92a098', 
          700: '#adb8b2', 
          800: '#c8d0cb', 
          900: '#e4e7e5' 
        },
        // ShadCN UI colors (keeping for component compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}