import React from 'react'
import projectImage1 from "../assets/project-page-image.png"
import { BiHash, BiLink } from 'react-icons/bi'
import {projects} from "../projects/projects.js"
import {motion} from "framer-motion"



const Projects = () => {
    return (
        <div className='w-full min-h-screen font-quicksand mb-10'>
            <div className=' lg:mx-30 mx-5 mt-30 mb-10 lg:mt-40'>
                <motion.img src={projectImage1} alt="Image" className='rounded-md' whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}/>
            </div>
            <div className='lg:mx-30 mx-5 flex flex-col lg:flex-row gap-10'>
                <motion.div className='flex flex-col gap-6' whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                    <h1 className='text-[50px] font-bold' >My Projects</h1>
                    <p className='text-lg font-normal'>Explore a selection of my key projects demonstrating my full stack development expertise, from personal websites to complex applications.</p>
                    <div className='flex md:flex-row flex-col text-lg md:gap-6 gap-1 font-normal'>
                        <span className='flex gap-2 items-center'><BiHash className='text-blue-500 font-semibold'/>HTML, CSS, JavaScript</span>
                        <span className='flex gap-2 items-center'><BiHash className='text-blue-500 font-semibold'/>React, Node.js</span>
                        <span className='flex gap-2 items-center'><BiHash className='text-blue-500 font-semibold'/>Responsive Design</span>
                    </div>
                </motion.div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:w-[800px]'>
                    {
                        projects.map((project, index) => {
                            return <motion.div key={index} className='flex flex-col gap-2' whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                                <h1 className='text-2xl font-bold line-clamp-1'><a href={project.link} target='_blank'>{project.name}</a></h1>
                                <p className='text-md font-normal'>{project.description}</p>
                                <span className='flex gap-2 items-center text-blue-400 font-semibold'><a href={project.github} target='_blank'>Github</a><BiLink className='text-lg'/></span>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects