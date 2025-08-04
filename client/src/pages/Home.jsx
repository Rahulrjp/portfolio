import React, { useRef, useEffect, useState } from 'react';
import backgroundImage from "../assets/homepage-background.jpg"
import profilePicture from "../assets/profile-picture.jpg"
import { animated } from '@react-spring/web'
import { animation } from '../animations/animations.js'
import { projects } from "../projects/projects.js"
import { motion } from 'framer-motion';
import { BiHash } from 'react-icons/bi';

const Home = ({isMenuOpen}) => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    //Scroll Animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (
        <>
            <div className={`flex flex-col justify-center bg-slate-200 font-quicksand`} aria-disabled={isMenuOpen ? "true" : "false"}>
                <div className={`h-screen w-full flex flex-col md:gap-15 gap-5 justify-center items-center bg-cover `} style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',backgroundPosition: 'center' }}>
                    <div>
                        <animated.h1 style={{ ...animation().springDtoU }} className='md:text-[70px] text-[40px] line-clamp-2 text-shadow-white lg:px-80 px-5 text-center font-semibold text-gray-300'>Welcome to my Dev Portfolio</animated.h1>
                    </div>
                    <div>
                        <animated.h1
                            style={{ ...animation().springDtoU }}
                            className='text-lg text-shadow-white md:px-40 lg:px-80 px-5 text-center font-semibold text-gray-300'>
                            I am Rahul Vishwakarma.
                            I’m a full-stack developer passionate about creating innovative and user-friendly web applications. Explore my projects and skills to see how I can bring your ideas to life. Let’s build something amazing together!
                        </animated.h1>
                    </div>
                    <div>
                        <animated.div
                            style={{ ...animation().springDtoU }}
                        >
                            <input type="email"
                                placeholder='Enter your email'
                                className="bg-white px-4  py-2 rounded-l-md md:w-[400px] w-[200px] outline-none" />
                            <button className='bg-blue-400 py-2 px-4 rounded-r-md text-white font-semibold cursor-pointer'>Send</button>
                        </animated.div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <div className='flex w-full flex-col lg:flex-row gap-10 m-10'>

                        <animated.img
                            src={profilePicture}
                            alt="profile"
                            className={`lg:w-[600px] w-full rounded-md`}
                            style={{ ...animation().springLtoR }}
                        />

                        <div className={`flex flex-col md:gap-10 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                            ref={divRef}>
                            <h1 className='md:text-[50px] text-[25px] font-semibold text-gray-800 md:leading-13 leading-8'>
                                Hi, I'm a passionate Full Stack Developer eager to create impactful web applications
                            </h1>
                            <p className='text-lg font-semibold text-gray-700 '>
                                I am a dedicated student with a strong foundation in both front-end and back-end technologies. My journey began in 2023, and I have since been committed to continuous learning, innovation, and collaboration to build high-quality projects.
                            </p>
                            <div className='flex justify-around'>
                                <div className='flex flex-col gap-1 text-center'>
                                    <h1 className='text-4xl text-gray-800 font-semibold'>5+</h1>
                                    <p className='text-lg text-gray-700'>Projects Completed</p>
                                </div>
                                <div className='flex flex-col gap-1 text-center'>
                                    <h1 className='text-4xl text-gray-800 font-semibold'>5+</h1>
                                    <p className='text-lg text-gray-700'>Certifications earned</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black w-full flex justify-center items-center text-white'>
                    <div className='w-[80%]'>
                        <div className='flex flex-col gap-6 my-12'>
                            <h1 className='text-xl font-semibold'>My projects</h1>
                            <h1 className='text-4xl font-semibold'>Explore my Projects</h1>
                            <p className='text-lg'>I've worked on a variety of projects, from simple web applications to complex systems. Here are some of my favorites.</p>
                        </div>
                        {projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <hr />
                                    <motion.div className='flex flex-col lg:flex-row md:gap-20 gap-5 my-10' whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                                        <img src={project.image} alt="image" className='w-[400px] rounded-md' />
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-3xl font-semibold'>{project.name}</h1>
                                            <h1 className='text-lg font-light'>{project.description}</h1>
                                            <h1 className='text-lg font-light md:flex block gap-4'>{project.tags.map((tag, indx) => <span key={indx} className='flex gap-1 items-center'><BiHash className='text-blue-500 text-xl font-light' />{tag}</span>)}</h1>
                                        </div>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home