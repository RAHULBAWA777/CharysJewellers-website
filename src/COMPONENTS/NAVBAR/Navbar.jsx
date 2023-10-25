import React from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './navbar.css'
import { Link } from "react-router-dom";
import dbangles from "../../assets/diamond/DiaInPics/Bangles/1.jpg"
import dbracelet from "../../assets/diamond/DiaInPics/Brace/1.jpg"
import dchain from "../../assets/diamond/DiaInPics/Chain/1.jpg"
import dpendeants from "../../assets/diamond/DiaInPics/Pendants/1.jpg"



const Navbar = () => {



    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header id="nav" className='outline'>

                <div className='brand'>
                    Charys Jewellers
                </div>

                <div className="nav_links" ref={navRef}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                   
                        <li><Link to="/">Shop Now</Link></li>
                        <li className='subnav'><Link to="/alldaimonds">Diamond</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     DAIMOND SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    <h3>Shop By Collection</h3>
                                    <br />
                                    <ul>
                                        <li><Link to="/">Bangles</Link></li>
                                        <li><Link to="/">Bracelets</Link></li>
                                        <li><Link to="/">Necklace</Link></li>
                                        <li><Link to="/">Mangalsutra</Link></li>
                                        <li><Link to="/">Chains</Link></li>
                                        <li><Link to="/">Pendents</Link></li>
                                        <li><Link to="/">Vaddanam</Link></li>
                                        <li><Link to="/">Jhumkas</Link></li>
                                    </ul>
                                </div>
                                <div className='subnav-pics-section'>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbangles} alt="" />
                                        <div className="nav-image-captions"><p>Bangles</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbracelet} alt="" />
                                        <div className="nav-image-captions"><p>Bracelets</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dchain} alt="" />
                                        <div className="nav-image-captions"><p>Chains</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dpendeants} alt="" />
                                        <div className="nav-image-captions"><p>Pendants</p></div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className='subnav'><Link to="/">Gold</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     GOLD SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    <h3>Shop By Collection</h3>
                                    <br />
                                    <ul>
                                        <li><Link to="/">Bangles</Link></li>
                                        <li><Link to="/">Bracelets</Link></li>
                                        <li><Link to="/">Earrings</Link></li>
                                        <li><Link to="/">Necklace</Link></li>
                                        <li><Link to="/">Mangalsutra</Link></li>
                                        <li><Link to="/">Chains</Link></li>
                                        <li><Link to="/">Pendents</Link></li>
                                        <li><Link to="/">Chokers</Link></li>
                                        <li><Link to="/">Vaddanam</Link></li>
                                        <li><Link to="/">Chandbeli</Link></li>
                                    </ul>
                                </div>
                                <div className='subnav-pics-section'>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbangles} alt="" />
                                        <div className="nav-image-captions"><p>Bangles</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbracelet} alt="" />
                                        <div className="nav-image-captions"><p>Bracelets</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dchain} alt="" />
                                        <div className="nav-image-captions"><p>Chains</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dpendeants} alt="" />
                                        <div className="nav-image-captions"><p>Pendants</p></div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/">Platinum</Link></li>



                        <li><Link to="/">Traditional</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     TRADITIONAL  SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    <h3>Shop By Collection</h3>
                                    <br />
                                    <ul>
                                        <li><Link to="/">Kundan/ Naxi/ Temple</Link></li>
                                        <li><Link to="/">Uncut / Polki</Link></li>
                                        <li><Link to="/">Pachi</Link></li>
                                        <li><Link to="/">Navaratan</Link></li>
                                    </ul>
                                </div>
                                <div className='subnav-pics-section'>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbangles} alt="" />
                                        <div className="nav-image-captions"><p>Kundan</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dbracelet} alt="" />
                                        <div className="nav-image-captions"><p>Uncut</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dchain} alt="" />
                                        <div className="nav-image-captions"><p>Pachi</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/">
                                        <img className='subnav-img' src={dpendeants} alt="" />
                                        <div className="nav-image-captions"><p>Navaratan</p></div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/">Customise Your Design</Link></li>
                        <li><Link to="/">Charys Design</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
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