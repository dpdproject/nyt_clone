import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { MenuContext } from '../context/MenuContext';
import logo from "../images/nyt-logo.png";
import { IoMdMenu, IoIosSearch } from "react-icons/io";

import Search from "./Search";
import Menu from './Menu';

export default function Navbar(props) {

    const { isOpen, handleToggle } = useContext(MenuContext)

    const [showSearch, setShowSearch] = useState(false);
    
    const handleSearch = () => {
        setShowSearch(!showSearch)
    };

    return <>
        {isOpen ? <Menu /> : null}
        <nav className="navbar">
            <div className="navbar--firstline">
                <div className="firstline--items--left">
                    <button type="button" onClick={handleToggle} className="second--button">
                        <IoMdMenu />
                    </button>
                    <button type="button" onClick={handleSearch} className="second--button search--btn">
                        <IoIosSearch />
                    </button>
                </div>
                {showSearch ? <Search /> : null}
                <ul className="firstline--items--center">
                    <Link to="/">U.S.</Link>
                    <Link to="/international/">International</Link>
                    <Link to="/ca/">Canada</Link>
                    <Link to="/es/">Espanol</Link>
                    <Link to="/cn/">中文</Link>
                </ul>
                <div className="firstline--items--right">
                    <button type="button" className="third--button subscribe">
                        <Link to='/subscription_campaign/'>Subscribe for €0.50/Week</Link>
                    </button>
                    <button type="button" className="third--button">
                        <Link to='/login/'>Log In</Link>
                    </button>
                </div>
            </div>
            <div className="navbar--secondline">
                <div className='secondline--left'>
                    <h5>{props.date}</h5>
                </div>
                <Link to="/">
                    <img src={logo} alt="New York Times" className="navbar--logo"/>
                </Link>
                <div className='secondline--right'>
                    <Link to="/section/todayspaper">Today's Paper</Link>
                </div>
            </div>
            <div className="navbar--thirdline">
                <ul className='thirdline--list'>
                    <Link to="/section/world/">World</Link>
                    <Link to="/section/usnews/">U.S. News</Link>
                    <Link to="/section/politics/">Politics</Link>
                    <Link to="/section/ny/">N.Y.</Link>
                    <Link to="/section/business/">Business</Link>
                    <Link to="/section/opinion/">Opinion</Link>
                    <Link to="/section/tech/">Tech</Link>
                    <Link to="/section/science/">Science</Link>
                    <Link to="/section/health/">Health</Link>
                    <Link to="/section/sports/">Sports</Link>
                    <Link to="/section/arts/">Arts</Link>
                    <Link to="/section/books/">Books</Link>
                    <Link to="/section/style/">Style</Link>
                    <Link to="/section/food/">Food</Link>
                    <Link to="/section/travel/">Travel</Link>
                    <Link to="/section/magazine/">Magazine</Link>
                    <Link to="/section/tmagazine/">T Magazine</Link>
                    <Link to="/section/realestate/">Real Estate</Link>
                    <Link to="/section/video/">Video</Link>
                </ul>
            </div>
        </nav>
    </>
}