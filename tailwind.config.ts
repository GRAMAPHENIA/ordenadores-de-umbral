import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ['"VT323"', 'monospace'],
      },
      colors: {
        // Tonos teal para el texto
        text: {
          DEFAULT: "#14FFEC", // Teal neón brillante
          dark: "#0D9488",   // Teal oscuro
          light: "#5EEAD4",  // Teal claro
          muted: "#0F766E",  // Teal apagado
        },
        // Alias para compatibilidad
        foreground: {
          DEFAULT: "#14FFEC",
          dark: "#0D9488",
          light: "#5EEAD4",
          muted: "#0F766E",
        },
        // Fondo oscuro
        background: {
          DEFAULT: "#0A0F0F", // Casi negro con tono teal
          dark: "#000000",    // Negro puro
          light: "#0F1E1D",   // Gris muy oscuro con tono teal
          paper: "#0D1717",   // Fondo de tarjetas con tono teal
        },
        // Bordes y elementos de interfaz
        border: {
          DEFAULT: "#0F766E",
          input: "#134E4A",
        },
        ring: {
          DEFAULT: "#14FFEC",
        },
        // Colores de botones y elementos interactivos
        primary: {
          DEFAULT: "#14FFEC",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#134E4A",
          foreground: "#14FFEC",
        },
        destructive: {
          DEFAULT: "#FF3333", // Rojo para errores
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#134E4A",
          foreground: "#5EEAD4",
        },
        accent: {
          DEFAULT: "#0F766E",
          foreground: "#14FFEC",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 10%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 7%)",
          foreground: "hsl(173, 80%, 90%)",
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
} satisfies Config

export default config
