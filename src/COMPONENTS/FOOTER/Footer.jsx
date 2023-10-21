import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import smallCJLogo from '../../assets/cjpolicies/logo-r.jpeg'




const Footer = () => {
  return (
    <>
      <footer className='outline'>
        <div className="footer-container">
          <div className="footer-links-section">

            <div className="footer-links">
              <h4 className="caption-heading">Get to know us</h4>
         
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
              <div className="socials">
              <img width="32" height="32" src="https://img.icons8.com/wired/64/facebook-new.png" alt="facebook-new"/>
              <img width="32" height="32" src="https://img.icons8.com/wired/32/instagram-new--v1.png" alt="instagram-new--v1"/>
              <img width="32" height="32" src="https://img.icons8.com/wired/32/whatsapp.png" alt="whatsapp"/>
              <img width="32" height="32" src="https://img.icons8.com/wired/64/linkedin.png" alt="linkedin"/>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">cj promises and quality</h4>
              
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">cj making and designs</h4>
         
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
              <Link to="/home"><p>home</p></Link>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">customer service</h4>
     
              <p>+919393480361/8367322322</p>
              <p>11-12-31, Plot no 5, Road Number 1
                SRK Puram , Kothapet , Saroornagar
                Hyderabad, Telanagana - 500035
                Near : HDFC Bank</p>
              <p>info@charysjewellers.com</p>
            </div>

          </div>




          <div className="footer-logo-section">
              <img src={smallCJLogo} alt="" />
              <br/>
              <h2 className='caption-heading'>Become A member</h2>
              <br/>
              <button className='black-button'>Join Now</button>
          </div>

          </div>
          <hr></hr>

          <div className="credits">
            <a href="http://" target="_blank" rel="noopener noreferrer">Powered by <b>Backbencher's Realty Pvt Ltd</b></a> &nbsp;&nbsp;&nbsp;
            <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">icons by <b>icons8</b></a>
          </div>
      </footer>
    </>
  )
}

export default Footer