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
                        <Link to='/section/usnews/'>U.S.</Link>
                        <Link to='/section/world/'>Politics</Link>
                        <Link to='/section/world/'>New York</Link>
                        <Link to='/section/world/'>Business</Link>
                        <Link to='/section/world/'>Tech</Link>
                        <Link to='/section/world/'>Science</Link>
                        <Link to='/section/world/'>Climate</Link>
                        <Link to='/section/world/'>Sport</Link>
                        <Link to='/section/world/'>Wildfire Tracker</Link>
                        <Link to='/section/world/'>Obituaries</Link>
                        <Link to='/section/world/'>The Upshot</Link>
                        <Link to='/section/world/'>Today's Paper</Link>
                        <Link to='/section/world/'>Corrections</Link>
                        <Link to='/section/world/'>Trending</Link>
                    </ul>
                </div>
            </section>
        </div>
    )
}
