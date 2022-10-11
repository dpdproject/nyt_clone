import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

import BookArticle from './BookArticle';

export default function BookSection() {

    const news = useContext(ApiContext);
    const books = news.books;
    
    let book = books.map(item => {

        let images = item.multimedia[2];

        return (
            <BookArticle 
                key = {item.uri}
                caption = {item.byline}
                url = {item.url}
                title = {item.title}
                abstract = {item.abstract}
                imageUrl = {images.url}
                imageCaption = {images.caption}
                imageCopyright = {images.copyright}
            />
        )
    })

    return <>
        <div className='section--title'>
            <h2>Books</h2>
        </div>
        <div className='book--container'>
            {book}
        </div>
    </>
}
