import React from 'react'
import Layout from '../components/layout';

import { FormattedMessage, injectIntl, useIntl  } from "gatsby-plugin-intl"

const AboutPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <h1 style={{ textTransform: `capitalize` }}>
                <FormattedMessage id="about_me" />
            </h1>
            <p> <FormattedMessage id="my_story" /></p>

            <p> <FormattedMessage id="my_story_tech" /> <br/>
                <a href="https://www.youtube.com/watch?v=KSTk9P0yh2Y&t=331s" target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id="documentary" />
                </a>
            </p>
            <p><FormattedMessage id="free_time" /></p>
        </Layout>
    )
}

export default injectIntl(AboutPage)