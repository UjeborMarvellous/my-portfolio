import React from "react"
import "./Home.css"
import { useTypewriter } from 'react-simple-typewriter';
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  const {text} = useTypewriter({
    words: [ " Web Developer."," Self Believer.",],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 5000
    })
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hello, <br /> I’m <span>Marvellous Ujebor</span>
            </h1>
            <h2>
              a
              <span>
                {text}
              </span>
            </h2>

            <p className="p">A hard-working and determined youth seeking an opportunity to succeed in a dynamic company that paves room for growth. I'm a skilled self-taught programmer and confident that my knowledge, ability, and experience in Web development with HTML,CSS,TAILWIND CSS,BOOSTRAP,REACT JS, and NEX JS etc will allow me to deliver successful results for any Company.</p>
            {/* <div className="mt-12">
              <button className="px-12 py-4 text-red-500 hov hover:text-white rounded-2xl">Click to view my Resume</button>
            </div> */}
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://wa.me/08103752860">
                    <button className='btn_shadow px-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white'>
                      <i class='fab fa-whatsapp'></i>
                    </button>
                  </a>
                  {/* <button className='btn_shadow px-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white'>
                    <i class='fab fa-instagram'></i>
                  </button> */}
                  <a href="https://www.linkedin.com/in/marvellous-ujebor-023679226/">
                    <button className='btn_shadow px-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src="Img/2.jpg" alt='' className="h-5/5" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home