import React from 'react'

import footerStyles from './footer.module.scss'

import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import logo from '../../static/logo.png'
import twitterLogo from '../../static/icons/twitter.svg'
import instagramLogo from '../../static/icons/instagram.svg'
import linkedinLogo from '../../static/icons/linkedin.svg'
import behanceLogo from '../../static/icons/behance.svg'
import dribbbleLogo from '../../static/icons/dribbble.svg'

const Footer = () =>  {

    return(
        <footer className={ footerStyles.footer }>
            <div className={footerStyles.logo}><Link to='/'><img src={logo} alt="Logo"/></Link></div>
            <h2>
                <FormattedMessage id="like_my_work" />
            </h2>
            <p>
                <FormattedMessage id="work_opportunities" />
            </p>
            <a href="mailto:hello@consueloromano.com" className={footerStyles.contact}>hello@consueloromano.com</a>

            <div className={ footerStyles.social }>      
                <a href="https://www.linkedin.com/in/consuelo-romano/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="Logo de Linkedin"/></a>
                <a href="https://twitter.com/consusnoc" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="Logo de Twitter"/></a>
                <a href="https://www.instagram.com/consuelo_designer/" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Logo de Instagram"/></a>
                <a href="https://www.behance.net/consueloromano" target="_blank" rel="noopener noreferrer"><img src={behanceLogo} alt="Logo de Behance"/></a>
                <a href="https://dribbble.com/consueloromano" target="_blank"rel="noopener noreferrer"><img src={dribbbleLogo} alt="Logo de Dribbble"/></a>
            </div>
        </footer>
    )
}

export default Footer