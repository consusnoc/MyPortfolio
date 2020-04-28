import React from 'react';
import Img from 'gatsby-image';

const Dribbblecard = ({ url, cover, title, localCover }) => (
    <a
    href={url}
    target="_blank"
    rel="noopener noreferrer">
        <img src={cover} alt={title} />
	</a>
)
export default Dribbblecard