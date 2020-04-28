import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"

import Dribbblecard from '../components/dribbblecard';
import sliderStyles from './slider.module.scss'

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';


export default () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    //pauseOnHover: true
  };
  const data = useStaticQuery(graphql`
    query {
        allDribbbleShot(sort: {fields: [published], order: DESC}, limit: 15) {
            nodes {
                title
                id
                published(formatString: "MMMM DD, YYYY")
                url
                cover
                localCover {
                    childImageSharp {
                        fluid(maxWidth: 396) {
                            src
                        }
                    }
                }
            }
        }
    }
  `)
  console.log(data);
  return (
    <Slider {...settings}>
        {data.allDribbbleShot.nodes.map(shot => (
            <Dribbblecard
                title={shot.title}
                cover={shot.cover}
                localCover={shot.localCover}
                url={shot.url}
            />
            
        ))}
    </Slider>
  )
}