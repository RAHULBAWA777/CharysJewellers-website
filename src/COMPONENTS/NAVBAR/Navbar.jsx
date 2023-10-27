import React from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './navbar.css'
import { Link } from "react-router-dom";
import brand from '../../assets/logoB.png'
// import dbangles from "../../assets/diamond/DiaInPics/Bangles/1.jpg"
// import dbracelet from "../../assets/diamond/DiaInPics/Brace/1.jpg"
// import dchain from "../../assets/diamond/DiaInPics/Chain/1.jpg"
// import dpendeants from "../../assets/diamond/DiaInPics/Pendants/1.jpg"



const Navbar = () => {



    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <>
            <header id="nav" className='outline'>

                <div className='brand'>
                    <img src={brand} alt="nav img" />
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
                                        <li><Link to="/daimondbangles">Bangles</Link></li>
                                        <li><Link to="/daimondbracelets">Bracelets</Link></li>
                                        <li><Link to="/daimondnecklace">Necklace</Link></li>
                                        <li><Link to="/daimondmangalsutra">Mangalsutra</Link></li>
                                        <li><Link to="/daimondchains">Chains</Link></li>
                                        <li><Link to="/daimondpendants">Pendents</Link></li>
                                        <li><Link to="/daimondvaddanam">Vaddanam</Link></li>
                                        <li><Link to="/daimondjhumkas">Jhumkas</Link></li>
                                        <li><Link to="/">Rings</Link></li>
                                        <li><Link to="/">Earrings</Link></li>
                                    </ul>
                                </div>
                                {/* <div className='subnav-pics-section'>
                                    <div className='subnav-pics-links'><Link to="/daimondbangles">
                                        <img className='subnav-img' src={dbangles} alt="" />
                                        <div className="nav-image-captions"><p>Bangles</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/daimondbracelets">
                                        <img className='subnav-img' src={dbracelet} alt="" />
                                        <div className="nav-image-captions"><p>Bracelets</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/daimondchains">
                                        <img className='subnav-img' src={dchain} alt="" />
                                        <div className="nav-image-captions"><p>Chains</p></div>
                                    </Link>
                                    </div>
                                    <div className='subnav-pics-links'><Link to="/daimondpendants">
                                        <img className='subnav-img' src={dpendeants} alt="" />
                                        <div className="nav-image-captions"><p>Pendants</p></div>
                                    </Link>
                                    </div>
                                </div> */}
                            </div>
                        </li>


                        <li className='subnav'><Link to="/allgolds">Gold</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     GOLD SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    <h3>Shop By Collection</h3>
                                    <br />
                                    <ul>
                                        <li><Link to="/goldbangles">Bangles</Link></li>
                                        <li><Link to="/goldbracelets">Bracelets</Link></li>
                                        <li><Link to="/goldearrings">Earrings</Link></li>
                                        <li><Link to="/goldnecklace">Necklace</Link></li>
                                        <li><Link to="/goldmangalsutra">Mangalsutra</Link></li>
                                        <li><Link to="/goldchains">Chains</Link></li>
                                        <li><Link to="/goldpendants">Pendants</Link></li>
                                        <li><Link to="/goldchowkers">Chowkers</Link></li>
                                        <li><Link to="/goldvaddanam">Vaddanam</Link></li>
                                        <li><Link to="/goldchandbali">Chandbali</Link></li>
                                        <li><Link to="/goldrings">Rings</Link></li>
                                       
                                    </ul>
                                </div>
                                {/* <div className='subnav-pics-section'>
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
                                </div> */}
                            </div>
                        </li>
                        <li><Link to="/daimondbangles">Platinum</Link></li>



                        <li className='subnav'><Link to="/">Traditional</Link>
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
                                {/* <div className='subnav-pics-section'>
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
                                </div> */}
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