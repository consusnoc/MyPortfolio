import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import logo from '../../static/logo.png'

import headerStyles from './header.module.scss'

const Header = () => {
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
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Proyectos</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>Sobre mí</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contacto</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header