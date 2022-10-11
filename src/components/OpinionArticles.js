import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

import ArticleType2 from './ArticleType2';

export default function RightSection() {

    const news = useContext(ApiContext);
    const tempOpinion = news.opinion;
    const opinion = tempOpinion.filter(item => item.title !== "")
    
    const titles = opinion.map(item => item.title)
    const abstract = opinion.map(item => item.abstract)
    const url = opinion.map(item => item.url)
    const byline = opinion.map(item => item.byline)
    const images = opinion.map(item => item.multimedia[2])
    const imgUrl = images.map(item => item.url)
    const imgCopyright = images.map(item => item.copyright)
    const imgCaption = images.map(item => item.caption)

    const lastOpinions = opinion.slice(3, 6);

    const otherOpinions = lastOpinions.map(item => {
        return (
            <ArticleType2
                key = {item.uri}
                byline = {item.byline}
                abstract = {item.abstract}
                url = {item.url}
            />
        )
    })
  
    return <>
        <div className='section--title'>
            <h2>Opinion</h2>
        </div>
        <section className='right--container'>
            <div className='right--first--article'>
                <div>
                    <img 
                        src={imgUrl[0] ? imgUrl[0] : null} 
                        alt={imgCaption ? imgCaption[0] : imgCopyright[0]} 
                        className='right--img' 
                    />
                    <figcaption>{imgCopyright[0]}</figcaption>
                </div>
                <div className='right--text'>
                    <h4 className='byline'>{byline[0]}</h4>
                    <h1 className='right--title'>
                        <a href={url[0]}>{titles[0]}</a>
                    </h1>
                    <h3 className='right--abstract'>{abstract[0]}</h3>
                </div>
            </div>
            <div className='article--split'>
                <div className='split--left'>
                    <img 
                        src={imgUrl[1] ? imgUrl[1] : null}
                        alt={imgCaption ? imgCaption[1] : imgCopyright[1]}
                    />
                    <div>
                        <h4 className='byline'>{byline[1]}</h4>
                        <h3 className='split--left--title'>
                            <a href={url[1]}>{abstract[1]}</a>
                        </h3>
                    </div>
                </div>
                <div className='vertical--line'></div>
                <div className='split--right'>
                    <img 
                        src={imgUrl[2] ? imgUrl[2] : null}
                        alt={imgCaption ? imgCaption[2] : imgCopyright[2]}
                    />
                    <div>
                        <h4 className='byline'>{byline[2]}</h4>
                        <h3 className='split--right--title'>
                            <a href={url[2]}>{abstract[2]}</a>
                        </h3>
                    </div>
                </div>
            </div>
            {otherOpinions}
        </section>
    </>
}