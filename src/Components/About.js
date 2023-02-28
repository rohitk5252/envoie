import React from 'react'
import emailsvg from '../Static/email.svg'
import phonesvg from '../Static/phone.svg'
const About = () => {
  return (
    <section id="about" className='about'>
        <div className="container">
            <div className="row flexrow">
                <div className="col-12">
                    <img src={emailsvg} alt="" />
                    <div className="text_content">
                        <h2>Whats an <span>AMP</span> email?</h2>
                        <p>AMP email is a technology that allows you to incorporate interactive elements like checkout buttons, quizzes, webinar forms, calendars etc into your emails without needing to open a new tab to visit a website.</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="text_content">
                        <h2>Why Does It <span>Matter?</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <span>  elit. Dolores, eligendi?</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis perspiciatis adipisci esse, qui beatae odit veritatis. Soluta nobis dicta vel!</p>
                    </div>
                    <img src={phonesvg} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About