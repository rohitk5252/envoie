import React, {useEffect, useRef, useState} from 'react'
import logo from '../Static/Vectorlogo.png'
const Header = () => {
  const [cross, handleCross] = useState(false)

  const [windowSize, setWindowSize] = useState(
    window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <header id="header" className='header'>
        <div className="container">
                <div className="logo_part">
                        <a href="/"><img src={logo} alt="" /></a>
                </div>

                <nav>
                    <ul className='navigation'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Faq</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </nav>

                <div className="buttons">
                    <button className='Btn Btn--rounded'>Login</button>
                    <button className='Btn Btn--primary Btn--rounded'>Signup</button>
                </div>
        </div>
                
              
            
    </header>
  )
}

export default Header