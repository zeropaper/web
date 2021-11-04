module.exports = {
  plugins: {
    require('postcss-for'),
    require('postcss-color-mod-function')(),
    require('lost'),
    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-media-queries': {
          importFrom: [
            {
              customMedia: {
                '--sm-viewport': '(max-width: 375px)',
                '--md-viewport': '(max-width: 768px) and (min-width: 375px)',
                '--lg-viewport': '(min-width: 769px)',
                '--mobile-viewport': '(max-width: 768px)',
                '--xs': '(min-width: 0px) and (max-width: 599px)', // small phone
                '--sm': '(min-width: 600px) and (max-width: 959px)', // larger phone / tablet
                '--md': '(min-width: 960px) and (max-width: 1279px)', // small laptop/desktop
                '--lg': '(min-width: 1280px) and (max-width: 1919px)', // standard desktop
                '--xl': '(min-width: 1920px)'
              }
            }
          ]
        }
      }
    }
  }
}
