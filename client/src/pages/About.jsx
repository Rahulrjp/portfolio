import React from 'react'
import aboutImage from "../assets/about-image.jpg"
import { motion } from 'framer-motion'
import { animated } from '@react-spring/web'
import { animation } from '../animations/animations.js'


const About = () => {
    return (
        <div className='mt-20 min-h-screen'>
            <div className='lg:flex-row flex-col flex md:gap-15 lg:gap-20 gap-10 py-10 lg:px-40 md:px-15 px-5 font-quicksand'>
                <animated.h1 className='md:text-[50px] text-[40px] font-bold leading-12' style={{ ...animation().springLtoR }}>My Journey as a Developer</animated.h1>
                <animated.p className='text-lg font-normal' style={{ ...animation().springRtoL }}>As a passionate full stack development student, I have dedicated myself to mastering a wide range of technologies and building impactful projects. My educational background and hands-on experience have fueled my motivation to create innovative web solutions. I believe in continuous learning, collaboration, and sharing knowledge to grow as a developer and contribute meaningfully to the tech community.</animated.p>
            </div>
            <div className='lg:py-20 py-5 md:px-15 px-5'>
                <motion.img src={aboutImage} alt="Image" className='rounded-md' whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }} />
            </div>
        </div>
    )
}

export default About