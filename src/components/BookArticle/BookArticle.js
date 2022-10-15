import React from 'react';
import './bookarticle.css';

function BookArticle(prop) {
    return (
        <a href={prop.url} className='book--link'>
            <div className='book--image--container'>
                <img src={prop.imageUrl} alt={prop.imageCopyright} className='book--image' />
                <figcaption className='book-caption'>{prop.imageCaption ? prop.imageCaption : `Copyright: ${prop.imageCopyright}`}</figcaption>
            </div>
            <h1 className='book--title'>{prop.title}</h1>
            <h3 className='book--abstract'>{prop.abstract}</h3>
        </a>
    )
}

export default BookArticle;