module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      // Desktop First
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }   
      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... } 
      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }   
      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }   
      'sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }  
      'xs': {'max': '425px'},
      // => @media (max-width: 425px) { ... }
      '2xs': {'max': '375px'},
      // => @media (max-width: 375px) { ... }
      
      // Mobile First
      'xs-m': '425px',
      // => @media (min-width: 425px) { ... }
      'sm-m': '640px',
      // => @media (min-width: 640px) { ... }
      'md-m': '768px',
      // => @media (min-width: 768px) { ... }
      'lg-m': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl-m': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl-m': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: false
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
