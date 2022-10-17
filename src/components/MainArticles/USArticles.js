import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import './articles.css';

import ArticleType2 from '../ArticleType2/ArticleType2';

export default function FrontPageArticles() {
    const news = useContext(DataContext);
    const us = news.us;
    const data = us.filter((item) => (item.section === 'U.S.' && item.subsection === 'Politics'));

    const myData = data.slice(0, 4);

    const myDataLive = myData.map(item => item.material_type_facet)
    const myDataUrl = myData.map(item => item.url)
    const myDataTitles = myData.map(item => item.title)
    const myDataAbstract = myData.map(item => item.abstract)
    const myDataImages = myData.map(item => item.multimedia[2])
    const myDataImgUrl = myDataImages.map(item => item.url)
    const myDataImgCopyright = myDataImages.map(item => item.copyright)
    const myDataImgCaption = myDataImages.map(item => item.caption)

    const tempOtherData = myData.slice(2, 4);
    const otherData = tempOtherData.map(item => {
        return (
            <ArticleType2
                key = {item.uri}
                title = {item.title}
                url = {item.url}
                abstract = {item.abstract}
            />
        )
    })

    return <>
        <div className='section--title'>
            <h2>US News</h2>
        </div>
        <section className='frontpage'>
            <div className={myDataLive[0] === 'Live Blog Post' ? 'article--live' : 'hidden'}>
                <h4>live</h4>
            </div>
            <div className='frontpage--firstline'>
                <div className='frontpage--link'>
                    <a href={myDataUrl[0] ? myDataUrl[0] : myDataUrl[1]}>
                        <h2 className='frontpage--title'>{myDataTitles[0] ? myDataTitles[0] : myDataTitles[1]}</h2>
                        <p className='frontpage--abstract'>{myDataAbstract[0] ? myDataAbstract[0] : myDataAbstract[1]}</p>
                    </a>
                    <a href={myDataUrl[1]}>
                        <h2 className='frontpage--title'>{myDataTitles[1]}</h2>
                        <p className='frontpage--abstract'>{myDataAbstract[1]}</p>
                    </a>
                </div>
                <div className='frontpage--img--container'>
                    <img 
                        src={myDataImgUrl[0]}
                        alt= {myDataImgCaption[0]}
                        className='frontpage--img'
                    />
                    <p className='frontpage--img--caption'>{myDataImgCopyright[0]}</p>
                </div>
            </div>
            <div className='typeTwo--grid'>
                {otherData}
            </div>
        </section>
        <div className='horizontal--line'></div>
    </>     
}
