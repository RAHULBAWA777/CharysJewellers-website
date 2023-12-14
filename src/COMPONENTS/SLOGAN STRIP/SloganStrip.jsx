import React from 'react'
import './sloganstrip.css'
import { Link } from "react-router-dom";
import CjPolicy from '../ABOUT US COMPONENTS/CJ POLICY/CjPolicy'





const SloganStrip = () => {
  return (
    <>
      <div className="sloganContainer outline">
        <div className="sloganSemiContainer">
          <CjPolicy />
          {/* <div className="sloganSemiContainer2" id='sloganCJPolicy'>
            <h1 className="caption-heading2">
              At Charysjewellery store, every  Ornament displayed has accurate and detailed price breakup which indicates gold weight, stone weight, net weight.All this information is also available in your GST invoice which is most important document for the ownership of your product. You can be rest assured that A COMPLETE TRANSPARENCY in invoice is maintained while you purchase and honored by us for any future /post purchase queries.
            </h1>
            <br />
            <Link className='caption-link' to="/aboutus">About Us</Link>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default SloganStrip