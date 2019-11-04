import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

import projStyles from './projects.module.scss'

import { FormattedMessage, injectIntl, Link, useIntl  } from "gatsby-plugin-intl"


const ProjectsPage = () =>  {
    const intl = useIntl()
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1> <FormattedMessage id="projects" /></h1>
            <ol className={projStyles.posts}>
                { data.allContentfulBlogPost.edges.map((edge) =>  {
                    return  (
                        <li className={projStyles.post}>
                            <Link to={`/project/${edge.node.slug}`}>
                              <div className={projStyles.imgPost} dataName={`${edge.node.slug}`} />
                              <h2>{edge.node.title}</h2>
                              <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>    
                    )
                })
                }
            </ol>
        </Layout>
    )
}

export default injectIntl(ProjectsPage)