module.exports = {
    purge: [],
    dark: 'false',
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
      extend: {
        backgroundColor: ['odd', 'even'],
        textAlign: ['odd', 'even'],
        order: ['odd', 'even'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }