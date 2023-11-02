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

              <Link to="/aboutus"><p>About Charys Jewellers</p></Link>
              <Link to="/"><p>Charys Jewellers</p></Link>
              <div className="socials">
                <img width="32" height="32" src="https://img.icons8.com/wired/64/facebook-new.png" alt="facebook-new" />
                <img width="32" height="32" src="https://img.icons8.com/wired/32/instagram-new--v1.png" alt="instagram-new--v1" />
                <a className="abc-text" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*"> <img width="32" height="32" src="https://img.icons8.com/wired/32/whatsapp.png" alt="whatsapp" /> </a>
                <img width="32" height="32" src="https://img.icons8.com/wired/64/linkedin.png" alt="linkedin" />
              </div>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">CJ Promises and Quality</h4>

              {/* <Link to="#policyID"><p>CJ Policy</p></Link> */}
              <a href="#sloganCJPolicy">CJ Policy</a>
              <br />
              <Link to="aboutus">BIS Hall Mark Gold</Link>
              <br />
              <Link to="aboutus" >Tested & Certified Diamonds</Link>
              <br />
              <a href="#fillerPara" >BuyBack Gaurantee</a>
              
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">CJ Making and Designs</h4>

              <Link to="/alldaimonds">Diamond</Link>
              <br />
              <Link to="/allgolds">Gold</Link>
              <br />
              <Link to="/daimondbangles">Platinum</Link>
              <br />
              <Link to="/kundan">Traditional</Link>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">Customer Service</h4>

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
            <br />
            <h2 className='caption-heading'>Become a Member</h2>
            <br />
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