import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
// import Brand from '../../assets/bigLogo.png'


const Footer = () => {
  return (
    <>
      <footer className='outline'>
        <div className="footer-container">
          <div className="footer-links-section">

            <div className="footer-links">
              <h4 className="caption-heading">About Charys Jewellers</h4>

              <Link to="/aboutus" onClick={()=>[window.scrollTo(0 ,0)] }><p>About Us</p></Link>
              {/* <Link to="/"><p>Charys Jewellers</p></Link> */}
              <div className="socials">
                <a href="https://www.facebook.com/profile.php?id=100063889551619" target="_blank" rel="noopener noreferrer"> <img width="32" height="32" src="https://img.icons8.com/color/48/facebook.png" alt="facebook-new" /></a>
                <a href="https://www.instagram.com/charysjewellers/" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/color/48/instagram-new.png" alt="instagram-new--v1" /></a>               
                <a className="abc-text" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*"> <img width="32" height="32" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" /> </a>
                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" /></a>
                <a href="https://in.pinterest.com/sreesreesrinu/" target="_blank" rel="noopener noreferrer"><img width="32" height="32" src="https://img.icons8.com/color/48/pinterest--v1.png" alt="pinterest--v1"/></a>
                
              </div>
            </div>

            <div className="footer-links">
              <h4 className="caption-heading">CJ Promises & Policy</h4>

              {/* <Link to="#policyID"><p>CJ Policy</p></Link> */}
              <Link to="/cjpolicy" onClick={()=>[window.scrollTo(0 ,0)] }>CJ Policy</Link>
              <br />
              <Link to="/bishallmark" onClick={()=>[window.scrollTo(0 ,0)] }>BIS Hall Mark Gold</Link>
              <br />
              <Link to="/tested&certifieddiamonds" onClick={()=>[window.scrollTo(0 ,0)] }>Tested & Certified Diamonds</Link>
              <br />
              <Link to="/buyback" onClick={()=>[window.scrollTo(0 ,0)] }>BuyBack Gaurantee</Link>
              
            </div>

            {/* <div className="footer-links">
              <h4 className="caption-heading">CJ Making and Designs</h4>

              <Link to="/alldaimonds">Diamond</Link>
              <br />
              <Link to="/allgolds">Gold</Link>
              <br />
              <Link to="/daimondbangles">Platinum</Link>
              <br />
              <Link to="/kundan">Traditional</Link>
            </div> */}

            <div className="footer-links">
              <h4 className="caption-heading">Contact Us</h4>

              <p style={{fontFamily: "none"}}>+919393480361/8367322322</p>
              <p>11-12-31, Road No. 1
                SRK Puram , Kothapet , Saroornagar
                Hyderabad, Telangana - 500035
                Near : HDFC Bank</p>
              <p>info@charysjewellers.com</p>
            </div>

          </div>




          <div className="footer-logo-section">
            {/* <img src={Brand} alt="" /> */}
            <br />
            {/* <h2 className='caption-heading'>Become a Member</h2>
            <br />
            <button className='black-button'>Join Now</button> */}
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