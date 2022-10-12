import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { Link } from "react-router-dom";
import logo from "../images/nyt-logo.png";
import { IoMdMenu, IoMdContact, IoMdClose } from "react-icons/io";

import MenuCompressed from './MenuCompressed';

export default function NavbarCompressed(props) {
    
    const { isOpen, handleToggle } = useContext(MenuContext)

    return (
        <nav className="navbar">
            <div className="navbar--firstline">
                <div className="firstline--items">
                    <button type="button" onClick={handleToggle} className="second--button">
                        {isOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                    <Link to="/">
                        <img src={logo} alt="New York Times" className="navbar--logo"/>
                    </Link>
                    <button type="button" className="second--button">
                        <Link to='/login/'>{isOpen ? null : <IoMdContact />}</Link>
                    </button>
                </div>
            </div>
            {isOpen ? <MenuCompressed /> : null}
            <div className="navbar--secondline">
                <div>
                    <h5>{props.date}</h5>
                </div>
                <Link to='/subscription_campaign/'>
                    Subscribe for €0.50/Week
                </Link>
            </div>
        </nav>
    )
}
