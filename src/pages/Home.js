import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import OpinionArticles from '../components/OpinionArticles/OpinionArticles';
import BookSection from '../components/BookSection/BookSection';
import CultureSection from '../components/CultureSection/CultureSection';
import FrontPageArticles from '../components/MainArticles/FrontPageArticles';
import USArticles from '../components/MainArticles/USArticles';
import BusinessArticles from '../components/MainArticles/BusinessArticles';

export default function Home() {

    const news = useContext(DataContext);

    if( news ) {
        return (
            <main className='homepage'>
                <section className='split'>
                    <div className='left'>
                        <FrontPageArticles />
                        <USArticles />
                        <BusinessArticles />
                    </div>
                    <div className='vertical--line'></div>
                    <div className='right'>
                        <OpinionArticles />
                    </div>
                </section>
                <BookSection />
                <CultureSection />
            </main>
        )
    } else {
        return (
            <span className="loader"></span>
        )
    }
}