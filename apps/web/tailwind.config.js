/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "brandkraf-teal": "hsl(var(--brandkraf-teal) / <alpha-value>)",
        "brandkraf-purple": "hsl(var(--brandkraf-purple) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "70ch",
            color: "hsl(220 13% 26%)",
            lineHeight: "1.78",
            a: {
              color: "#0F9488",
              fontWeight: "600",
              textDecoration: "none",
              borderBottom: "1px solid rgba(20,184,166,0.4)",
              transition: "color .2s, border-color .2s",
            },
            "a:hover": { color: "#14B8A6", borderBottomColor: "#14B8A6" },
            h2: {
              color: "hsl(220 13% 13%)",
              fontWeight: "800",
              letterSpacing: "-0.02em",
              fontSize: "1.6em",
              marginTop: "2.2em",
              marginBottom: "0.7em",
              lineHeight: "1.25",
            },
            h3: {
              color: "hsl(220 13% 13%)",
              fontWeight: "700",
              letterSpacing: "-0.01em",
              fontSize: "1.25em",
              marginTop: "1.7em",
            },
            strong: { color: "hsl(220 13% 13%)", fontWeight: "700" },
            blockquote: {
              borderLeftColor: "#14B8A6",
              backgroundColor: "hsl(175 72% 41% / 0.06)",
              borderRadius: "0 0.6rem 0.6rem 0",
              padding: "0.4rem 1.25rem",
              fontStyle: "normal",
              fontWeight: "500",
              color: "hsl(220 13% 22%)",
            },
            "ul > li::marker": { color: "#14B8A6" },
            "ol > li::marker": { color: "#0F9488", fontWeight: "600" },
            code: {
              color: "#0F9488",
              backgroundColor: "hsl(175 72% 41% / 0.09)",
              padding: "0.15rem 0.4rem",
              borderRadius: "0.35rem",
              fontWeight: "600",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            hr: { borderColor: "hsl(220 13% 91%)", marginTop: "2.5em", marginBottom: "2.5em" },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};