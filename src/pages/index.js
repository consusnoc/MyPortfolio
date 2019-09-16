import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

import indexStyles from './index.module.scss'



const IndexPage = () => {
   return(
      <Layout>
         <div className={indexStyles.wrapper}>
            <h1>
               Hola! Mi nombre es Consuelo. <br/>
               Soy diseñadora UI/UX y desarrolladora web.
            </h1>
            <p>
               Utilizo mis conocimientos de diseño junto con los de desarrollo web para crear productos con una impronta minimalista, funcional y versátil con un fuerte enfoque en el usuario. 
               Me encanta crear experiencias digitales eficientes, fáciles de usar y visualmente atractivas. <br/>
               Podés ver mis <Link to='/projects'>proyectos de diseño</Link>, <a href="https://github.com/consusnoc" target="_blank" rel="noopener noreferrer">desarrollo</a>, descargar mi cv, conocer más <Link to='/about'>sobre mí</Link> o <a href="mailto:hello@consueloromano.com">enviarme un email</a>.
            </p>
         </div>
      </Layout>
   )
}

export default IndexPage