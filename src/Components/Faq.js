import React from 'react'

const Faq = () => {
    const handleAccord = (id) => {
        const AllAccordHead = document.getElementsByClassName("accoridan_head");
        const currHead = document.getElementById(id);
        for (const key in AllAccordHead) {
            
            // AllAccordHead[key].classList.remove("open") 
            console.log(typeof key)
          }
          
        // AllAccordHead.classList.remove("open")
        currHead.classList.toggle("open")
        // console.log(id, AllAccordHead)
    }

  return (
    <section id="faq" className='faq'>
        <div className="container">
                <h2>Frequently Asked Questions</h2>
        
        <div className="row wrapper">
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_head active" id="accord1">What if the email provider doesn’t open AMP emails? <i class="fa-sharp fa-solid fa-chevron-down"></i></div>
            <div className="accordian_body">We have an HTML fallback that you can configure. Gmail, GSuite, Yahoo and Mail.ru will allow AMP emails to open, for other email clients that don’t support AMP, an HTML fallback will open. </div>
            </div>
            <div className="col-12 accordian">
            <div onClick={(e)=>handleAccord(e.target.id)} className="accoridan_head" id="accord2">How do I send AMP emails? <i class="fa-sharp fa-solid fa-chevron-down"></i></div>
            <div className="accordian_body">We allow you to export and send the AMP emails created on envoie from your current email tool.</div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Faq