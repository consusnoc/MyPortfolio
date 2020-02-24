import React from "react"
import Layout from '../components/layout'

import { Button } from '../components/button'

import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import indexStyles from './index.module.scss'

import presentationImg from '../../static/presentation_image.png'

import ProjectsMini from './projectsMini'

const IndexPage = () => {
   const intl = useIntl()
   return(
      <Layout>
         <div className={indexStyles.wrapper}>
            <p className={indexStyles.title}> 

               <FormattedMessage id="main_title" />
               <span className={indexStyles.yellow}><FormattedMessage id="main_title1"/></span>
               <FormattedMessage id="and" />
               <span className={indexStyles.lilac}><FormattedMessage id="main_title2"/></span>
               <FormattedMessage id="lies_a" />
               <span className={indexStyles.red}><FormattedMessage id="main_title3"/></span>
               <FormattedMessage id="that_strives_towards" />
               <span className={indexStyles.lightBlue}><FormattedMessage id="main_title4"/></span>
               <FormattedMessage id="that_both" />
               <span className={indexStyles.orange}><FormattedMessage id="main_title5"/></span>
               <FormattedMessage id="across_any_device" />

               <br/>
               <span className={indexStyles.blue}><FormattedMessage id="thats_were"/></span>
            </p>
         </div>
         <div className={indexStyles.presentation}>
            <h1 className={indexStyles.titleStyles}>
               <FormattedMessage id="hi" />
            </h1>
            <p>
               <FormattedMessage id="presentation_description" />
            </p>
            
            <div className={indexStyles.presentationImgContainer}><img src={presentationImg} className={indexStyles.presentationImg} alt="Work description"/></div>

         </div>
         <div className={indexStyles.projects}>
            <h1 className={indexStyles.titleStyles}>
                  <FormattedMessage id="projects" />
            </h1>
            {/* <p>
               <FormattedMessage id="projects_description" />
               <br/>
               <FormattedMessage id="see_more" />
               <a href="mailto:hello@consueloromano.com">
                  <FormattedMessage id="email_me" />
               </a>
            </p> */}
            <ProjectsMini />
            <Link to="/projects/">
               <Button>All Projects</Button>
            </Link>
         </div>
      </Layout>
   )
}

export default IndexPage