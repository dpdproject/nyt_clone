import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './sections.css';
import '../../css/style.css';

import { DataContext } from '../../context/DataContext';

import ArticleType3 from '../../components/ArticleType3/ArticleType3';
import SectionFrontArticles from './SectionFrontArticles';

export default function NYNews() {

    // take world articles from context
    const news = useContext(DataContext);
    const ny = news.ny;

    // CREATE SUBSECTION ARRAY
    const subsection = ny.map(item => item.subsection)
    function removeDuplicates(subsection) {
        return subsection.filter((item,
            index) => subsection.indexOf(item) === index);
    }
    const tempSubsection = removeDuplicates(subsection);
    const filteredSub = tempSubsection.filter(item => item !== "")

    // take the first four articles
    const tempFour = ny.filter(item => item.abstract !== "")
    const firstFour = tempFour.slice(0, 4);

    const title = firstFour.map(item => item.title);
    const uri = firstFour.map(item => item.uri);
    const section = ny.map(item => item.section)
    const url = firstFour.map(item => item.url);
    const abstract = firstFour.map(item => item.abstract);
    const byline = firstFour.map(item => item.byline);
    const multimedia = firstFour.map(item => item.multimedia[2]);
    const imgUrl = multimedia.map(item => item.url);
    const copyright = multimedia.map(item => item.copyright);
    const caption = multimedia.map(item => item.caption);

    // take other articles for a list
    const otherArticles = ny.slice(4, 25);

    const article = otherArticles.map(item => {
        return (
            <ArticleType3
                key = {item.uri}
                url = {item.url}
                title = {item.title}
                abstract = {item.abstract}
                byline = {item.byline}
                multimedia = {item.multimedia}
                date = {item.published_date}
            />
        )
    })

    // LIST OF SUBSECTIONS
    const subsections = filteredSub.map(item => {

        return (
            <li>
                <Link to={`/section/nynews/${item}`} key={item.uri}>{item}</Link>
            </li>
        )
    })


    return <>
        <SectionFrontArticles 
            key = {uri}
            title = {title}
            url = {url}
            abstract = {abstract}
            byline = {byline}
            imgUrl = {imgUrl}
            copyright = {copyright}
            caption = {caption}
            subsections = {subsections}
            section = {section[0]}
        />
        <section className='sections--nav'>
            <h1>Latest</h1>
            {article}
        </section>
    </>
}