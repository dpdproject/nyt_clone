import React from 'react';

export default function ArticleType2(prop) {
  return (
    <a href={prop.url} className='typeTwo'>
        <h4 className={prop.byline ? 'byline' : 'hidden'}>{prop.byline}</h4>
        <h1 className={prop.title ? 'typeTwo--title' : 'hidden'}>{prop.title}</h1>
        <h3 className='typeTwo--abstract'>{prop.abstract}</h3>
    </a>
  )
}