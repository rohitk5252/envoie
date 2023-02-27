import React from 'react'
import banner from '../Static/banner.svg'
const Banner = () => {
  return (
    <section id="banner" className='banner'> 
        <div className="container">
            <div className="row flexrow">
                <div className="col-6">
                    <h2>The Future Of <span>Email</span> </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, numquam.</p>
                    <button className='Btn Btn--rounded Btn--primary'>Try For Free</button>
                </div>
                <div className="col-6">
                    <img src={banner} alt="" />
                </div>
            </div>
            </div>  
    </section>
  )
}

export default Banner