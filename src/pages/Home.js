import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

import OpinionArticles from '../components/OpinionArticles';
import BookSection from '../components/BookSection';
import CultureSection from '../components/CultureSection';
import FrontPageArticles from '../components/FrontPageArticles';
import USArticles from '../components/USArticles';
import BusinessArticles from '../components/BusinessArticles';
import Footer from '../components/Footer';

export default function Home() {

    const news = useContext(ApiContext);

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
                <Footer />
            </main>
        )
    }
}