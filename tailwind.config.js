/** @type {import('tailwindcss').Config} */
// Configuración de Tailwind CSS para Aura Beauty
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    // Clases usadas dinámicamente por JavaScript (scroll reveal)
    'reveal',
    'revealed',
    'reveal-delay-1',
    'reveal-delay-2',
    'reveal-delay-3',
    'reveal-delay-4',
    'marquee-track',
  ],
  theme: {
    extend: {
      // Paleta de colores Aura Beauty
      colors: {
        primary: '#F9A8D4',
        dark: '#1a1a1a',
        cream: '#FAFAFA',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#e8c96a',
          dark: '#b8921e',
        },
      },
      // Tipografías desde Google Fonts
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
      // Gradiente para botón de Instagram
      backgroundImage: {
        instagram: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F56040 100%)',
      },
    },
  },
  plugins: [],
}
