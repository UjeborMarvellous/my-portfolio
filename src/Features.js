import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

function Features() {
    const { text } = useTypewriter({
        words: [" my website.", " Will love to meet you"],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 5000
    })
    return (
        <>
            <div id='features'>
                <h1 className="font-bold capitalise text-3xl text-center pt-12 px">Languages Use By MU</h1>
                <div className="md:grid md:grid-cols-1 lg:grid-cols-3 lg:grid gap-8 mxs md:mt-20">
                    <div className="img1">
                        <img src="Img/3.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/4.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/5.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/6.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/7.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/8.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                    <div className="img1">
                        <img src="Img/9.jpg" alt="" className='full contain p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-4 h-4/4 shadow-2xl border-4' />
                    </div>
                </div>
            </div>
            <div id="blog">
                <div className="pt-12 ">
                    <h1 className="text-red-500 uppercase text-3xl font-semibold p2">About Me</h1>
                    <h1 className='text-5xl font-bold pt-3 snt p2'>Thank you for visiting <br />{text}.</h1>
                </div>
                <div className="flex">
                    <div className="two text-center">
                        <h1 className='text-3xl uppercase snt font-medium py-8'>Want to know more about me?</h1>
                        <h1 className='text-xl p'>A hard-working and determined youth seeking an opportunity to succeed in a dynamic company that paves room for growth. I'm a skilled self-taught programmer and confident that my knowledge, ability, and experience in Web development with HTML,CSS,TAILWIND CSS,BOOSTRAP,REACT JS, and NEX JS etc will allow me to deliver successful results for any Company. <br /><br />I am a 19 years old programmer who developed passion for computer science. I studied sciences at Aptech Computer Education and graduated as the best student. I did my Diploma in frontend programming with mentortribes and emerged as the best during my set. I have built multiple web applications which include but not limited e-commerce for furnitures, landing pages etc. <br /><br />Primary I love challenging projects as my learning with them are exponential. I am currently in Nigeria and Abuja to be precise.When i am not working, I play any sort of musical instruments and also love to sing,also love painting.</h1>
                    </div>
                </div>
                <div className="text-center py-12">
                    <h1 className='font-medium text-3xl uppercase'>Sample of my last project</h1>
                    <div className="imgs sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2 gap-8 my-12">
                        <img src="Img/13.jpg" alt="Loading..." className="w-full my-6 shadow-2xl p-6" />
                        <img src="Img/11.jpg" alt="Loading..." className="w-full my-6 shadow-2xl p-6" />
                        <img src="Img/12.jpg" alt="Loading..." className="w-full my-6 shadow-2xl p-6" />
                        <img src="Img/14.jpg" alt="Loading..." className="w-full my-6 shadow-2xl p-6" />
                    </div>
                </div>
            </div>
            <div id='contact' className='blog '>
                <h1 className="text-red-500 uppercase py-6 text-3xl swert font-semibold">Contact Me</h1>
                <h1 className="text-2xl capitalize font-semibold py-4  swert p2">You Can reach me through this social network <br /> always avialiable</h1>
                <div className="mails flex justify-between">
                    <div className="email flex">
                        <i class='fa fa-envelope btn_shadow px-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white text-red-500'></i>
                        <div className="em ml-6">
                            <p className='font-bold text-lg '>Email</p>
                            <a href="mailto:ujebormarvellous@gmail.com" className='text-blue-500'>ujebormarvellous@gmail.com</a>
                        </div>
                    </div>
                    <div className="icon">
                        <a href="https://wa.me/08103752860">
                            <button className='btn_shadow px-6 mr-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white'>
                                <i class='fab fa-whatsapp'></i>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/marvellous-ujebor-023679226/">
                            <button className='btn_shadow px-6 ml-6 py-4 rounded-lg transition delay-150 duration-300 ease-out hover:-translate-y-6 hover:text-white'>
                                <i class='fab fa-linkedin-in'></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
