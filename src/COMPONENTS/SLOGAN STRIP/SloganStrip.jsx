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
          <div className="sloganSemiContainer2">
            <h1 className="caption-heading2">
              Fine Jewellery <br /> For My Damn Self
            </h1>
            <br />
            <Link className='caption-link' to="/aboutus">About Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SloganStrip