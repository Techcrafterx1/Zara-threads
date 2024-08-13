import React from "react";
import './navbar.css'
import {RiMenu3Line, RiCloseLine, RiSearch2Line} from 'react-icons/ri'
import { useState } from "react";
import logo from '../../assests/logo.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="nav" id="nav">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div />
            <div className="nav-body">
                <figure className="nav-body_searchbar">
                    <RiSearch2Line color="#f55" size={15}/>
                    <input id="searchBar" placeholder="Search Products"/>
                </figure>
                <ul className="nav-body_list">
                    <li><a href="#nav">On Sale</a></li>
                    <li><a href="#nav">New Arrivals</a></li>
                    <li><a href="#nav">Brands</a></li>
                    <li><a href="#nav">Catergories</a></li>
                    <li><a href="#nav">Contact Us</a></li>
                </ul>
            </div>
            <div className="nav-menu_btn">
                {toggleMenu
                    ? <RiCloseLine color='#f55' size={15} onClick = {() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#f55' size={15} onClick = {() => setToggleMenu(true)}/>
                }
            </div>
        </nav>
    )
}

export default Navbar