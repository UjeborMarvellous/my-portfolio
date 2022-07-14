import React from 'react'

function Features() {
  return (
      <>
        <div id='features'>
            <h1 className="font-bold capitalise text-3xl text-center">Languages Use By MU</h1>
            <div className="md:grid md:grid-cols-1 lg:grid-cols-3 lg:grid gap-8 mxs md:mt-20">
                <div className="img1">
                    <img src="Img/3.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/4.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/5.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/6.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/7.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/8.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
                <div className="img1">
                    <img src="Img/9.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4'/>
                </div>
            </div>
        </div>
        <div id="blog">
            <div className="ml-16">
                <h1 className="text-red-500 capitalise text-3xl font-semibold ">About Me</h1>
                <h1 className='text-5xl font-bold py-10'>Thank you for visiting <br /> my website.</h1>
                <h1 className='text-xl font-medium'>Want to know more about me?</h1>
            </div>
            <div className="two">
                <h1>A hard-working and determined youth seeking an opportunity to succeed in a dynamic company that paves room for growth. I'm a skilled self-taught programmer and confident that my knowledge, ability, and experience in Web development with HTML,CSS,TAILWIND CSS,BOOSTRAP,REACT JS, and NEX JS etc will allow me to deliver successful results for any Company.</h1>
            </div>
        </div>
      </>
  )
}

export default Features
