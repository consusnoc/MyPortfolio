import React from "react"
import Layout from '../components/layout'
//import { Link } from 'gatsby'

import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import indexStyles from './index.module.scss'


const IndexPage = () => {
   const intl = useIntl()
   console.log(intl)
   return(
      <Layout>
         <div className={indexStyles.wrapper}>
            <h1> 
               <FormattedMessage id="title" />
               <br/>
               <FormattedMessage id="subtitle" />
            </h1>
            <p>
               <FormattedMessage id="description" />
               <br/>
               <FormattedMessage id="here_you_can_see" />
               <Link to="/projects/">
                  <FormattedMessage id="design_projects" />
               </Link>,
               <FormattedMessage id="my" />
               <a href="https://github.com/consusnoc" target="_blank" rel="noopener noreferrer"><FormattedMessage id="development_projects" /></a>, 
               <FormattedMessage id="download_my_cv_and_know_more" />
               <Link to="/about/">
                  <FormattedMessage id="about_me" />
               </Link>
               <FormattedMessage id="or" />
               <a href="mailto:hello@consueloromano.com"><FormattedMessage id="send_me_an_email" /></a>.
            </p>
         </div>
      </Layout>
   )
}

export default IndexPage