import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import './culturesection.css';

import ArticleType3 from '../ArticleType3/ArticleType3';

export default function CultureSection() {

    const news = useContext(DataContext);
    const arts = news.arts;

    // TAKE THE FIRST NEWS 
    const artsTitles = arts.map(item => item.title)
    const artsAbstract = arts.map(item => item.abstract)
    const artsUrl = arts.map(item => item.url)
    const artsByline = arts.map(item => item.byline)
    const artsImages = arts.map(item => item.multimedia[2])
    const artsImgUrl = artsImages.map(item => item.url)
    const artsImgCopyright = artsImages.map(item => item.copyright)
    const artsImgCaption = artsImages.map(item => item.caption)

    // TAKE OTHER NEWS TO SHOW (SECOND AND THIRD OF ARTS SECTION AND THE FIRST TWO OF STYLE SECTION)
    const style = news.style;

    const cutArts = arts.slice(1, 3)
    const cutStyle = style.slice(0, 2)
    const newData = cutArts.concat(cutStyle);

    const secondaryArticles = newData.map(item => {
        return (
            <ArticleType3
                key = {item.uri}
                url = {item.url}
                title = {item.title}
                abstract = {item.abstract}
                byline = {item.byline}
                multimedia = {item.multimedia}
            />
        )
    })

    return <>
        <div className='section--title'>
            <h2>Culture and Lifestyle</h2>
        </div>
        <section className='culture--section'>
            <div className='culture--first--article'>
                <div>
                    <img 
                        src={artsImgUrl[0] ? artsImgUrl[0] : null} 
                        alt={artsImgCaption ? artsImgCaption[0] : artsImgCopyright[0]} 
                        className='culture--first--img'
                    />
                    <figcaption>{artsImgCaption[0]}</figcaption>
                </div>
                <div className='culture--first--text'>
                    <a href={artsUrl[0]}>
                        <h4 className='byline'>{artsByline[0]}</h4>
                        <h1 className='culture--first--title'>{artsTitles[0]}</h1>
                        <h3>{artsAbstract[0]}</h3>
                    </a>
                </div>
            </div>
            <div className='culture--grid'>
                {secondaryArticles}
            </div>
        </section>
    </>
}