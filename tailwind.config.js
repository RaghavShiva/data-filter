module.exports = {
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Main blue color
        secondary: '#E4E4E4', // Light gray
        accent: '#F7A500', // Accent color for buttons
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
