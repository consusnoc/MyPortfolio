import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "🇬🇧",
  es: "🇪🇸",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                //color: currentLocale === language ? `#fff` : `#2961FF`,
                //backgroundColor: currentLocale === language ? `#2961FF` : `#000`,
                fontFamily: `MaisonNeueDemi`,
                fontSize: currentLocale === language ? `1.3rem` : `1rem`,
                verticalAlign: `middle`,
                textAlign: `center`,
                textDecoration: `none`,
                textShadow: `none`,
                //margin: 10,
                padding: `5px`,
                //borderBottom: currentLocale === language ? `1px solid #2961FF` : `none`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language