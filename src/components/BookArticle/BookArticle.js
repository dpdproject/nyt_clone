import React from 'react';
import './bookarticle.css';

export default function BookArticle(props) {
    return (
        <a href={props.url} className='book--link'>
            <div className='book--image--container'>
                <img src={props.imageUrl} alt={props.imageCopyright} className='book--image' />
                <figcaption className='book-caption'>{props.imageCaption ? props.imageCaption : `Copyright: ${props.imageCopyright}`}</figcaption>
            </div>
            <h1 className='book--title'>{props.title}</h1>
            <h3 className='book--abstract'>{props.abstract}</h3>
        </a>
    )
}