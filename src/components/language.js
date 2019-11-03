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
                color: currentLocale === language ? `#fdfcfc` : `#3A1C71`,
                backgroundColor: currentLocale === language ? `#3A1C71` : `#fdfcfc`,
                fontFamily: `MaisonNeueDemi`,
                fontSize: `.9rem`,
                textDecoration: `none`,
                textShadow: `none`,
                //margin: 10,
                padding: `10px`,
                border: `1px solid #3A1C71`,
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