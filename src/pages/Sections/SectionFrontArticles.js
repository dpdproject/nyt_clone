import React from 'react';

export default function SectionFrontArticles(props) {
    return <>
        <section className='sections--nav'>
            <h1>{props.section} News</h1>
            <ul>
                {props.subsections}
            </ul>
            <div className='horizontal--line'></div>
        </section>
        <section className='sections--articles'>
            <div className='articles--first--block'>
                <div>
                    <div className='sections--image'>
                        <img 
                            src={props.imgUrl[0]} 
                            alt={props.caption[0]}  
                        />
                        <figcaption>{props.copyright[0]}</figcaption>
                    </div>
                    <div className='sections--text'>
                        <h4 className='sections--byline'>{props.byline[0]}</h4>
                        <a href={props.url[0]}>
                            <h1>{props.title[0]}</h1>
                            <h3>{props.abstract[0]}</h3>
                        </a>
                    </div>
                </div>
                <div>
                    <div className='sections--image'>
                        <img 
                            src={props.imgUrl[1]} 
                            alt={props.caption[1]}                         
                        />
                        <figcaption>{props.copyright[1]}</figcaption>
                    </div>
                    <div className='sections--text'>
                        <h4 className='sections--byline'>{props.byline[1]}</h4>
                        <a href={props.url[1]}>
                            <h1>{props.title[1]}</h1>
                            <h3>{props.abstract[1]}</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className='articles--second--block'>
                <div className='second--block'>
                    <div className='sections--image'>
                        <img 
                            src={props.imgUrl[2]} 
                            alt={props.caption[2]}
                        />
                        <figcaption>{props.copyright[2]}</figcaption>
                    </div>
                    <div className='sections--text'>
                        <h4 className='sections--byline'>{props.byline[2]}</h4>
                        <a href={props.url[2]}>
                            <h1>{props.title[2]}</h1>
                            <h3>{props.abstract[2]}</h3>
                        </a>
                    </div>
                </div>
                <div className='second--block'>
                    <div className='sections--image'>
                        <img 
                            src={props.imgUrl[3]}
                            alt={props.caption[3]}
                        />
                        <figcaption>{props.copyright[3]}</figcaption>
                    </div>
                    <div className='sections--text'>
                        <h4 className='sections--byline'>{props.byline[3]}</h4>
                        <a href={props.url[3]}>
                            <h1>{props.title[3]}</h1>
                            <h3>{props.abstract[3]}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
