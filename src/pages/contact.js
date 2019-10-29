import React from 'react' 
import Layout from '../components/layout'

import { FormattedMessage, injectIntl, useIntl  } from "gatsby-plugin-intl"

const ContactPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <h1>
                <FormattedMessage id="contact_me" />
            </h1>
            <p>
                <FormattedMessage id="send_mail" /> 
                <a href="mailto:hello@consueloromano.com">hello@consueloromano.com</a>
            </p>  
        </Layout>
    )
}

export default injectIntl(ContactPage)