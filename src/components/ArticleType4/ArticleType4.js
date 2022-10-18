import React from 'react';
import './articletype4.css';

export default function ArticleType4(props) {

    let multimedia = props.multimedia[2];

    return (
        <div className='typeFour'>
            <img 
                src={multimedia.url ? multimedia.url : null} 
                alt={multimedia.caption ? multimedia.caption : multimedia.copyright} 
                className='typeFour--img'
            />
            <a href={props.url}>
                <h4 className='byline'>{props.byline}</h4>
                <h1 className='typeFour--title'>{props.title}</h1>
                <h3 className='typeFour--abstract'>{props.abstract}</h3>
            </a>
        </div>
    )
}