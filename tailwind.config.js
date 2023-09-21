module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3ABFF8',
          secondary: '#828DF8',
          accent: '#F471B5',
          neutral: '#1D283A',
          'base-100': 'rgba(20, 15, 30)',
          info: '#0CA6E9',
          success: '#2BD4BD',
          warning: '#F4C152',
          error: '#FB6F84'
        }
      }
    ]
  }
}
