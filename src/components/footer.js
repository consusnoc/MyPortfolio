import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

import twitterLogo from '../../static/icons/twitter.svg'
import instagramLogo from '../../static/icons/instagram.svg'
import linkedinLogo from '../../static/icons/linkedin.svg'
import behanceLogo from '../../static/icons/behance.svg'
import dribbbleLogo from '../../static/icons/dribbble.svg'

const Footer = () =>  {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    const author = data.site.siteMetadata.author
    return(
        <footer className={ footerStyles.footer }>
            <p>{author} ©2019 </p>
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