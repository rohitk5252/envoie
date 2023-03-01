import React from 'react'
import logo from '../Static/Vectorlogo.png'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row flexrow">
                <div className="col-3">
                        <img src={logo} alt="" />
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i> 401 Park Ave, 10th Floor, New York 10016</p>
                 </div>

                <div className="col-6 nav">
                        <a href="">Email Marketing</a><a href="">Customer Engagement</a><a href="">AMP Event</a>
                </div>

                <div className="col-3">
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i> emial@emknk.com</p>
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i> emial@emknk.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer