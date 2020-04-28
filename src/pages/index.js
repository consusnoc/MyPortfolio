import React from "react"
import Layout from '../components/layout'

import { Button } from '../components/button'

import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

import Slider from '../components/slider'

import indexStyles from './index.module.scss'

import presentationImg from '../../static/me.jpg'

import ProjectsMini from './projectsMini'

import UncontrolledLottie from '../components/UncontrolledLottie';

import WaveDivider from '../components/divider';


const IndexPage = () => {
   const intl = useIntl()
   return(
      <Layout>
         <div className={indexStyles.wrapper}>
            <div className={indexStyles.leftsvg}></div>
            <div className={indexStyles.rightsvg}></div>
            <p className={indexStyles.title}> 

               { /* SHORTER PHRASE
               <FormattedMessage id="hi_im" />
               <br/>
               <span className={indexStyles.orange}><FormattedMessage id="product_designer"/></span>
               <FormattedMessage id="and" />
               <span className={indexStyles.blue}><FormattedMessage id="ui_developer"/></span>
               <br/>
               <FormattedMessage id="header_title" /> */ }

               {/* LONGER PHRASE */}
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
         {/* NICE TO MEET YOU */}
         <div className={indexStyles.presentation}>
            <div className={indexStyles.presentationImgContainer}>
               <img src={presentationImg} className={indexStyles.presentationImg} alt="A random photo of me"/>
            </div>
            <div className={indexStyles.presentationText}>
               <h2 className={indexStyles.titleStylesh2}>
                  <FormattedMessage id="hi" />
               </h2>
               <p>
                  <FormattedMessage id="presentation_description1" />
                  <br/>
                  <FormattedMessage id="presentation_description2" />
               </p>
               <Link to="/about/">
                  <Button><FormattedMessage id="more_about_me" /></Button>
               </Link>
            </div>


         </div>

         <WaveDivider />

         {/* SKILLS */}
         <div className={indexStyles.skills}>
            <h3 className={indexStyles.titleStylesh3}>
               <FormattedMessage id="skills" />
            </h3>

            <UncontrolledLottie />

         </div>

         <WaveDivider />
         
         {/* PROJECTS */}
         <div className={indexStyles.projects}>
            <h3 className={indexStyles.titleStylesh3}>
                  <FormattedMessage id="projects" />
            </h3>
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
               <Button><FormattedMessage id="all_projects" /></Button>
            </Link>
         </div>
         <div className={indexStyles.dribbbleContainer}>
            <h2 className={indexStyles.dribbbleTitle}>
               Check out my latest Dribbble shots!
            </h2>
            
            <Slider/>

            <p className={indexStyles.instagramTxt}> You can also find me on Instagram as <a href="https://www.instagram.com/consuelodesigns/" target="_blank" rel="noopener noreferrer">@consuelodesigns</a></p>

         </div>
      </Layout>
   )
}

export default IndexPage