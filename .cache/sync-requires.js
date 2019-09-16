const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/consuelo/Desktop/Portfolio/src/pages/projects.js")))
}

