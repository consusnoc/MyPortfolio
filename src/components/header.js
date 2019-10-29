import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import logo from '../../static/logo.png'

import headerStyles from './header.module.scss'

import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import PropTypes from "prop-types"
import Language from './language'

const Header = ({ siteTitle }) => {
    const intl = useIntl();
    const data = useStaticQuery(graphql` 
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}><Link to='/'><img src={logo} alt="Logo"/></Link></div>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects/'>
                            <FormattedMessage id="projects" />
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about/'>
                            <FormattedMessage id="about_me" />
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact/'>
                            <FormattedMessage id="contact" />
                        </Link>
                    </li>

                    <Language />
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
siteTitle: ``,
}

export default Header