import React from 'react'
import Layout from '../components/layout' 

import me from '../../static/me.jpg'

import aboutStyles from './about.module.scss'

import { FormattedMessage, injectIntl, useIntl  } from "gatsby-plugin-intl"

const AboutPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <div className={aboutStyles.aboutContainer}>
                <h1 className={aboutStyles.aboutTitle}>
                    <FormattedMessage id="about_me" />
                </h1>
                <div className={aboutStyles.aboutContent}>
                    <img src={me} alt='Photo of myself at the beach' />
                    <p> <FormattedMessage id="my_story" /></p>
                    <p> <FormattedMessage id="my_story_tech" /> <br/>
                        <a href="https://www.youtube.com/watch?v=KSTk9P0yh2Y&t=331s" target="_blank" rel="noopener noreferrer">
                            <FormattedMessage id="documentary" />
                        </a>
                    </p>
                    <p><FormattedMessage id="free_time" /></p>
                
                </div>
            </div>
        </Layout>
    )
}

export default injectIntl(AboutPage)