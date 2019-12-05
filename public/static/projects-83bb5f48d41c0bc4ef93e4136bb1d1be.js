import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

import projStyles from './projects.module.scss'
import { Button } from '../components/button'

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
            <h1 className={projStyles.postTitle}> <FormattedMessage id="projects" /></h1>
            <ol className={projStyles.posts}>
                { data.allContentfulBlogPost.edges.map((edge) =>  {
                    return  (
                        <li className={projStyles.post}>
                            <Link to={`/project/${edge.node.slug}`}>
                              <div className={projStyles.imgPost} dataName={`${edge.node.slug}`} />
                              <div className={projStyles.detailPost}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                <Button>See Project</Button>
                              </div>
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