import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './navbar.css'
import { Link } from "react-router-dom";
import brand_img from '../../assets/brand-logo/img-1.png';



const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header id="nav" className='outline'>

                <div className='brand'>
                    <img src={brand_img} alt="brand_img" />
                </div>

                <div className="nav_links" ref={navRef}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/">Shop Now</Link></li>
                        <li><Link to="/">Diamond</Link></li>
                        <li><Link to="/">Gold</Link></li>
                        <li><Link to="/">Platinum</Link></li>
                        <li><Link to="/">Traditional</Link></li>
                        <li><Link to="/">Customise Your Design</Link></li>
                        <li><Link to="/">Charys Design</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </ul>
                </div>
                <button className='nav-btn ' onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </>
    )
}

export default Navbar