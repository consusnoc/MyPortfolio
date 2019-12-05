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
        
        allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
              node {
                publicURL
              }
            }
        }
               
    }
    `)
    console.log(data)
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}><Link to='/'><img src={logo} alt="Logo"/></Link></div>
            <input className={headerStyles.menuBtn} type="checkbox" id="menu-btn" />
            <label className={headerStyles.menuIcon} htmlFor="menu-btn">
                <span className={headerStyles.navicon}></span>
            </label>

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
                        {//*<a className={headerStyles.navItem} href={resumePdf}><FormattedMessage id="resume" /></a>*/
                        }
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