import React from 'react'
import './banner.css'
import watsappimg from '../../assets/brand-logo/whatsapp.png'
import mapimg from '../../assets/brand-logo/map.png'
import licence1 from '../../assets/brand-logo/gia.jpeg'
import licence2 from '../../assets/brand-logo/hmp.jpeg'
import licence3 from '../../assets/brand-logo/igi.jpeg'
import licence4 from '../../assets/brand-logo/ssg-1.jpeg'

const Banner = () => {
  return (
    <>
      <div id="banner">
        <ul>
          <li>
            <b>
              <img className='logo' src={watsappimg} alt="wa" /> <a className="linktag-1" target="_blank" href="https://wa.me/918367322322?text=I'm%20interested%20in%20*CHARY%20JEWELLERS*">
                <i style={{ backgroundColor: 'green', borderRadius: '100%' }} className="fab fa-whatsapp ">
                </i> &nbsp; +91 8367 322 322 &nbsp; |
              </a> &nbsp;
            </b>
            </li>

          <li>
            <b>
              <img className='logo' src={mapimg} alt="wa" /><a className="text-w" target="_blank" href="https://www.google.com/maps/place/charys+jewellers/@17.3671412,78.5479019,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb990a6ee0767d:0x3b39b258c6c66d55!8m2!3d17.3671355!4d78.5479094!16s%2Fg%2F11j7j9_plm">
                <i className="fa fa-map-marker">
                </i> &nbsp; Store Locator &nbsp; | &nbsp;
              </a>
            </b>
          </li>
          
          <li>
            <a href="https://www.gia.edu/report-check-landing" target="_blank"> <img className='logo2' src={licence1} /> </a>
            <a href="https://www.bis.gov.in/hallmarking-overview/jewellers-registration-scheme/list-of-licensed-jewellers/" target="_blank"> <img className='logo2' src={licence2} /> </a>
            <a href="https://www.igi.org/reports/verify-your-report" target="_blank"> <img className='logo2' src={licence3} /> </a>
            <a href="https://sgl-labs.com/report-verification/" target="_blank"> <img className='logo2' src={licence4} /> </a>
          </li>


        </ul>
      </div>
    </>
  )
}

export default Banner