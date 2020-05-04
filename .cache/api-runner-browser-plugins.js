module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":950,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"/Users/consuelo/Desktop/Portfolio/src/intl","languages":["en","es"],"defaultLanguage":"en","redirect":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
