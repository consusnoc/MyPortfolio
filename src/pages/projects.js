import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import projStyles from './projects.module.scss'

const ProjectsPage = () =>  {
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
            <h1>Proyectos</h1>
            <ol className={projStyles.posts}>
                { data.allContentfulBlogPost.edges.map((edge) =>  {
                  console.log(edge)
                    return  (
                        <li className={projStyles.post}>
                            <Link to={`/project/${edge.node.slug}`}>
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

export default ProjectsPage