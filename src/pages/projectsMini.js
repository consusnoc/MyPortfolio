import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

import projStyles from './projectsMini.module.scss'

import { FormattedMessage, injectIntl, Link, useIntl  } from "gatsby-plugin-intl"


const ProjectsPage = () =>  {
    const intl = useIntl()
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}, limit: 3) {
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
        <div>    
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
        </div>
    )
}

export default injectIntl(ProjectsPage)