import React from 'react'
import { Link , graphql } from 'gatsby'


import arrow from '../../static/icons/left-arrow.png'
import projStyles from './project.module.scss'

import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
` 

const Project = ( props ) =>  {
    return(
        <Layout>
            <Link to='/projects' className={projStyles.backLink}><img src={arrow} alt="arrow"/> Volver</Link>
            <h1 className={projStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Project