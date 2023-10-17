import React from 'react'
import './jewelgridnav.css'
import d from '../../assets/jewel-grid-nav/d.jpg'
import g from '../../assets/jewel-grid-nav/g.jpg'
import p from '../../assets/jewel-grid-nav/p.jpg'
import t from '../../assets/jewel-grid-nav/t.jpeg'
import c from '../../assets/jewel-grid-nav/c.jpeg'
import cd from '../../assets/jewel-grid-nav/cd.jpg'

const JewelGridNav = () => {
  return (
    <>
    <div className="jewel-grid-container outline">

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={d} alt=""/>
        </div>
        <div className="black-caption">
            <h6>Daimond</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={g} alt=""/>
        </div>
        <div className="black-caption">
        <h6>Gold</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={p} alt=""/>
        </div>
        <div className="black-caption">
        <h6>platinum</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={t} alt=""/>
        </div>
        <div className="black-caption">
        <h6>traditional</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={c} alt=""/>
        </div>
        <div className="black-caption">
        <h6>customise your design</h6>
        </div>
    </div>

    <div className="jewel-grid-item outline">
        <div className="jewel-img">
            <img src={cd} alt=""/>
        </div>
        <div className="black-caption">
        <h6>charys design</h6>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default JewelGridNav