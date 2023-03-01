import React from 'react'
import recomended from '../Static/recommended.svg'

const Prices = () => {
  return (
    <section id="prices" className='prices'>
        <div className="container">
            <div className="heading_part text_center">
                <h2>Choose Your Plan</h2>
                <button className='Btn Btn--rounded Btn--outline'>MONTHLY</button>
            </div>
            
            <div className="row flexrow">
                <div className="col-3 pricecard">
                    <div className="rates text_center">
                        <h4>Free</h4>
                        <h3><sup>$</sup>0<sub>/month</sub></h3>
                        <p>Free Forever</p>
                        <button className="Btn Btn--rounded Btn--outline">Select</button>
                    </div>
                    <div className="service">
                        <p><i class="fa-solid fa-check"></i><b>1,000</b> emails /month</p>
                        <p><i class="fa-solid fa-check"></i> <b>1 Team</b> member </p>
                        <p><i class="fa-solid fa-check"></i> <b>Basic</b> Templates </p>
                        <p class="active_line"><i class="fa-solid fa-xmark"></i> <b>No add on</b> available in this plans</p>
                        <p>Export options available</p> 
                        <p><i class="fa-solid fa-check"></i>Gmail</p>
                        <p><i class="fa-solid fa-xmark"></i>Outlook</p>
                        <p><i class="fa-solid fa-xmark"></i>HTML</p>
                        <p><i class="fa-solid fa-xmark"></i>PDF</p>
                        <p><i class="fa-solid fa-xmark"></i>Image</p>
                        <p><i class="fa-solid fa-xmark"></i>Webhook</p>
                        <p><i class="fa-solid fa-xmark"></i>Zapier</p>
                        <p><i class="fa-solid fa-xmark"></i>Wide range of ESPs</p>
                    </div>
                </div>
                <div className="col-3 pricecard active">
                <div className="rates text_center color-primary-blue active">
                        <img src={recomended} alt="" />
                        <h4>Free</h4>
                        <h3><sup>$</sup>515<sub>/month</sub></h3>
                        <p>Billed Monthly</p>
                        <button className="Btn Btn--rounded Btn--primary">Select</button>
                    </div>
                    <div className="service">
                        <p><i class="fa-solid fa-check"></i><b>1,000</b> emails /month</p>
                        <p><i class="fa-solid fa-check"></i> <b>1 Team</b> member </p>
                        <p><i class="fa-solid fa-check"></i> <b>Basic</b> Templates </p>
                        <p class="active_line"><i class="fa-solid fa-check"></i> <b>$30/month</b> add on for extra 50k emails</p>
                        <p>Export options available</p> 
                        <p><i class="fa-solid fa-check"></i>Gmail</p>
                        <p><i class="fa-solid fa-check"></i>Outlook</p>
                        <p><i class="fa-solid fa-check"></i>HTML</p>
                        <p><i class="fa-solid fa-check"></i>PDF</p>
                        <p><i class="fa-solid fa-check"></i>Image</p>
                        <p><i class="fa-solid fa-check"></i>Webhook</p>
                        <p><i class="fa-solid fa-check"></i>Zapier</p>
                        <p><i class="fa-solid fa-check"></i>Wide range of ESPs</p>
                    </div>
                    
                </div>
                <div className="col-3 pricecard">
                    {/* <div className='pricecard'> */}
                <div className="rates text_center color-primary-blue">
                        <h4>Free</h4>
                        <h3><sup>$</sup>115<sub>/month</sub></h3>
                        <p>Billed Monthly</p>
                        <button className="Btn Btn--rounded Btn--outline">Select</button>
                    </div>
                    <div className="service">
                        <p><i class="fa-solid fa-check"></i><b>1,000</b> emails /month</p>
                        <p><i class="fa-solid fa-check"></i> <b>1 Team</b> member </p>
                        <p><i class="fa-solid fa-check"></i> <b>Basic</b> Templates </p>
                        <p class="active_line"><i class="fa-solid fa-check"></i> <b>No add on</b> available in this plans</p>
                        <p>Export options available</p> 
                        <p><i class="fa-solid fa-check"></i>Gmail</p>
                        <p><i class="fa-solid fa-check"></i>Outlook</p>
                        <p><i class="fa-solid fa-check"></i>HTML</p>
                        <p><i class="fa-solid fa-check"></i>PDF</p>
                        <p><i class="fa-solid fa-check"></i>Image</p>
                        <p><i class="fa-solid fa-check"></i>Webhook</p>
                        <p><i class="fa-solid fa-check"></i>Zapier</p>
                        <p><i class="fa-solid fa-xmark"></i>Wide range of ESPs</p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="col-3 pricecard">
                    {/* <div className="pricecard"> */}
                <div className="rates text_center color-primary-blue">
                        <h4>Free</h4>
                        <h3><sup>$</sup>22<sub>/month</sub></h3>
                        <p>Billed Monthly</p>
                        <button className="Btn Btn--rounded Btn--outline">Select</button>
                    </div>
                    <div className="service">
                        <p><i class="fa-solid fa-check"></i><b>1,000</b> emails /month</p>
                        <p><i class="fa-solid fa-check"></i> <b>1 Team</b> member </p>
                        <p><i class="fa-solid fa-check"></i> <b>Basic</b> Templates </p>
                        <p class="active_line"><i class="fa-solid fa-check"></i> <b>No add on</b> available in this plans</p>
                        <p>Export options available</p> 
                        <p><i class="fa-solid fa-check"></i>Gmail</p>
                        <p><i class="fa-solid fa-check"></i>Outlook</p>
                        <p><i class="fa-solid fa-check"></i>HTML</p>
                        <p><i class="fa-solid fa-check"></i>PDF</p>
                        <p><i class="fa-solid fa-check"></i>Image</p>
                        <p><i class="fa-solid fa-xmark"></i>Webhook</p>
                        <p><i class="fa-solid fa-xmark"></i>Zapier</p>
                        <p><i class="fa-solid fa-xmark"></i>Wide range of ESPs</p>
                    </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </section>
  )
}

export default Prices