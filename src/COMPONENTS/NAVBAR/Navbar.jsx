import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './navbar.css'
import { Link } from "react-router-dom";
import brand from '../../assets/bigLogo.png'
import watsappimg from '../../assets/brand-logo/whatsapp.png'
import mapimg from '../../assets/brand-logo/map.png'
// import dbangles from "../../assets/diamond/DiaInPics/Banges/1.jpg"
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
                        <li><Link to="/" onClick={()=>[window.scrollTo(0 ,0)] }>Home</Link></li>

                        {/* <li><Link to="/">Shop Now</Link></li> */}
                        <li className='subnav'><Link to="/alldaimonds" onClick={()=>[window.scrollTo(0 ,0)] }>Diamond</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     DAIMOND SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    {/* <h3>Shop By Collection</h3>
                                    <br /> */}
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


                        <li className='subnav'><Link to="/allgolds" onClick={()=>[window.scrollTo(0 ,0)] }>Gold</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     GOLD SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    {/* <h3>Shop By Collection</h3>
                                    <br /> */}
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
                        <li><Link to="/comingsoon">Platinum</Link></li>



                        <li className='subnav'><Link to="/customise" onClick={()=>[window.scrollTo(0 ,0)] }>Traditional</Link>
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     TRADITIONAL  SUBNAV     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <div className='subnav-content'>
                                <div className="subnav-list-section">
                                    {/* <h3 className='grey'>Shop By Collection</h3>
                                    <br /> */}
                                    <ul>
                                        <li><Link to="/kundan">Kundan/ Naxi/ Temple</Link></li>
                                        <li><Link to="/polki">Uncut / Polki</Link></li>
                                        <li><Link to="/pachi">Pachi</Link></li>
                                        <li><Link to="/navaratan">Navaratan</Link></li>
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
                        <li><Link to="/customiseyourdesign" onClick={()=>[window.scrollTo(0 ,0)] }>Customise Your Design</Link></li>
                        <li><Link to="/charysdesigns" onClick={()=>[window.scrollTo(0 ,0)] }>Charys Designs</Link></li>


                        <div className="side_logo">
                    <li className='ban'>
                        <b>
                            <a className="linktag-1" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*">
                                {/* <i style={{ backgroundColor: 'green', borderRadius: '100%' }} className="fab fa-whatsapp ">
                                    </i>  */}
                                <img className='logo' src={watsappimg} alt="wa" />
                                {/* <br /> */}
                                {/* &nbsp; +91 8367 322 322 &nbsp; | */}
                            </a> &nbsp;
                        </b>
                    </li>

                    <li className='ban'>
                        <b>
                            <a className="text-w" target="_blank" href="https://www.google.com/maps/place/charys+jewellers/@17.3671412,78.5479019,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb990a6ee0767d:0x3b39b258c6c66d55!8m2!3d17.3671355!4d78.5479094!16s%2Fg%2F11j7j9_plm">
                                {/* <i className="fa fa-map-marker">
                                    </i> */}
                                <img className='logo' src={mapimg} alt="wa" />
                                {/* <br /> &nbsp; Store Locator &nbsp; | &nbsp; */}
                            </a>
                        </b>
                    </li>
                </div>


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