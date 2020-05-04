import React from 'react';

const Dribbblecard = ({ url, cover, title, localCover }) => (
    <a
    href={url}
    target="_blank"
    rel="noopener noreferrer">
        <img src={cover} alt={title} />
	</a>
)
export default Dribbblecard