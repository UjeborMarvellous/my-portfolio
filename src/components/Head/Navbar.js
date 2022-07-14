import React, { useState } from "react"
import "./Header.css"


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header shadow-2xl lg:pb-24 lg:px-24 sm'>
        <div className='container d_flex flex'>
          <div className=''>
              <div className="flex mr-12">
                <img src="Img/1.jpg" alt='logo' className="Imag"/>
                <h1 className="text-5xl my-auto font-medium text-black">MU<span className="text-blue-500 italic">Tech</span></h1>
              </div>
          </div>

          <div className='navlink ml-auto -mr-12'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase flex"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#blog'>About</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header