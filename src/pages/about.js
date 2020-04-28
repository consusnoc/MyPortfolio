import React from 'react'
import Layout from '../components/layout' 

import me from '../../static/me.jpg'

import aboutStyles from './about.module.scss'

import { FormattedMessage, injectIntl, useIntl  } from "gatsby-plugin-intl"

import WaveDivider from '../components/divider';

const AboutPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <h1 className={aboutStyles.aboutTitle}><FormattedMessage id="about_me" /></h1>
            
            <div className={aboutStyles.aboutContainer}>

                <div className={aboutStyles.aboutContent}>
                    <div className={aboutStyles.leftContent}>
                        <h2 className={aboutStyles.titleStylesh2}> <FormattedMessage id="my_story_tech" /></h2>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KSTk9P0yh2Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <WaveDivider />
                <div className={aboutStyles.aboutText}>
                    <div className={aboutStyles.journey}>
                        <h3 className={aboutStyles.titleStylesh3}>
                            <FormattedMessage id="my_journey" />
                        </h3>
                        <p> <FormattedMessage id="my_story1" /></p>
                        <p><FormattedMessage id="my_story2" /></p>
                    </div>
                    <div className={aboutStyles.skillsValuesContainer}>
                        <div className={aboutStyles.skills}>
                            <h3 className={aboutStyles.titleStylesh3}>
                                <FormattedMessage id="skills" />
                            </h3>
                            <ul>
                                <li><FormattedMessage id="ux" /></li> 
                                <li><FormattedMessage id="ui" /></li>
                                <li><FormattedMessage id="ixd" /></li>
                                <li><FormattedMessage id="branding" /></li>
                                <li><FormattedMessage id="logos" /></li>
                            </ul>
                        </div>
                        <div className={aboutStyles.values}>
                            <h3 className={aboutStyles.titleStylesh3}>
                                <FormattedMessage id="values" />
                            </h3>
                            <ul>
                                <li><FormattedMessage id="good_design" /></li> 
                                <li><FormattedMessage id="learn" /></li>
                                <li><FormattedMessage id="problem" /></li>
                                <li><FormattedMessage id="simple" /></li>
                            </ul>
          
                        </div>
                    </div>
                </div>
        
            </div>
            
        </Layout>
    )
}

export default injectIntl(AboutPage)