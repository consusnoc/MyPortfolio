import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/global.scss'
import layoutStyles from './layout.module.scss'

import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

const Layout = ({ children, intl }) => {
    return(
        <div className={layoutStyles.container}>
            <Header siteTitle={intl.formatMessage({ id: "title" })}/>            
            <div className={layoutStyles.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)