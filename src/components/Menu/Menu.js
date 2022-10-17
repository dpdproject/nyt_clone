import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MenuContext } from '../../context/MenuContext';

import './menu.css';

export default function Menu() {

    const { handleToggle } = useContext(MenuContext);

    return (
        <div className='navbar--links' onMouseLeave={handleToggle} >
            <section className='menu--items'>
                <div>
                    <h2>Releases</h2>
                    <ul>
                        <Link to='/international/'>International</Link>
                        <Link to='/ca/'>Canada</Link>
                        <Link to='/es/'>Espanol</Link>
                        <Link to='/cn/'>中文网</Link>
                    </ul>
                </div>
                <div className='divider'></div>
                <div>
                    <h2>News</h2>
                    <ul>
                        <Link to='/section/world/'>World</Link>
                        <Link to='/section/coronavirus/'>Coronavirus</Link>
                        <Link to='/section/us/'>U.S.</Link>
                        <Link to='/section/us/politics'>Politics</Link>
                        <Link to='/section/nynews/'>New York</Link>
                        <Link to='/section/business/'>Business</Link>
                        <Link to='/section/tech/'>Tech</Link>
                        <Link to='/section/science/'>Science</Link>
                        <Link to='/section/climate/'>Climate</Link>
                        <Link to='/section/sport/'>Sport</Link>
                        <Link to='/section/wildfiretracker/'>Wildfire Tracker</Link>
                        <Link to='/section/obituaries/'>Obituaries</Link>
                        <Link to='/section/theupshot/'>The Upshot</Link>
                        <Link to='/section/todayspaper/'>Today's Paper</Link>
                        <Link to='/section/corrections/'>Corrections</Link>
                        <Link to='/section/trending/'>Trending</Link>
                    </ul>
                </div>
            </section>
        </div>
    )
}
