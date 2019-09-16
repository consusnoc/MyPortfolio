import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import projStyles from './projects.module.scss'

const ProjectsPage = () =>  {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              html
              excerpt
              fields{
                slug
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Proyectos</h1>
            <ol className={projStyles.posts}>
                { data.allMarkdownRemark.edges.map((edge) =>  {
                  console.log(edge)
                    return  (
                        <li className={projStyles.post}>
                            <Link to={`/project/${edge.node.fields.slug}`}>
                              <h2>{edge.node.frontmatter.title}</h2>
                              <p>{edge.node.excerpt}</p>
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