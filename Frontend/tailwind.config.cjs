module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { internYellow: '#fbbf24', internBlue: '#2563eb' },
      boxShadow: { 'offset-yellow': '8px 8px 0 rgba(251,191,36,1)' }
    }
  },
  plugins: []
}

