module.exports = {
    purge: [],
    dark: 'media',
    theme: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'Comfortaa': ['"Comfortaa"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      backgroundImage: {
        'hero-img': "url('/hero.jpg')",
       },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }