import React from 'react';
import './articletype3.css';

export default function ArtType2(prop) {

    let multimedia = prop.multimedia[2];

    return (
        <div className='typeThree'>
            <img 
                src={multimedia.url ? multimedia.url : null} 
                alt={multimedia.caption ? multimedia.caption : multimedia.copyright} 
                className='typeThree--img'
            />
            <a href={prop.url}>
                <h4 className='byline'>{prop.byline}</h4>
                <h1 className='typeThree--title'>{prop.title}</h1>
                <h3 className='typeThree--abstract'>{prop.abstract}</h3>
            </a>
        </div>
    )
}
