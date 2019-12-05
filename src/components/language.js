import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  es: "ES",
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
                color: currentLocale === language ? `#fff` : `#2961FF`,
                backgroundColor: currentLocale === language ? `#2961FF` : `#000`,
                fontFamily: `MaisonNeueDemi`,
                fontSize: `.9rem`,
                textDecoration: `none`,
                textShadow: `none`,
                //margin: 10,
                padding: `5px 10px`,
                border: `1px solid #2961FF`,
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