import React from 'react';
import './articletype3.css';

export default function ArticleType3(props) {

    let multimedia = props.multimedia[2];

    return (
        <div className='typeThree'>
            <img 
                src={multimedia.url ? multimedia.url : null} 
                alt={multimedia.caption ? multimedia.caption : multimedia.copyright} 
                className='typeThree--img'
            />
            <a href={props.url}>
                <h4 className='byline'>{props.byline}</h4>
                <h1 className='typeThree--title'>{props.title}</h1>
                <h3 className='typeThree--abstract'>{props.abstract}</h3>
            </a>
        </div>
    )
}