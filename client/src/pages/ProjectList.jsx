import { BiHash, BiLink } from "react-icons/bi"
import { motion } from "framer-motion"
import { projects } from "../projects/projects.js"
const ProjectList = () => {
    return (
        <div className='w-full min-h-screen font-quicksand'>
            <motion.div className='my-20 lg:mx-30 md:mx-10 mx-5' animate={{ translateX: 0 }} initial={{ translateX: -600 }} transition={{ duration: 0.5 }}>
                <h1 className='md:text-[50px] text-[35px] font-bold pt-10'>See my projects</h1>
            </motion.div>
            <div className="my-20 lg:mx-30 md:mx-10 mx-5">
                {
                    projects.map((project, index) => {
                        return <div key={index} >
                            <hr />
                            <motion.div className="flex lg:flex-row flex-col lg:gap-20 gap-5 md:p-8 p-4" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                                <img src={project.image} alt="Image" className="w-[400px] rounded-md border" />
                                <div className="flex flex-col md:gap-5 gap-2">
                                    <h1 className="md:text-3xl text-2xl font-semibold">{project.name}</h1>
                                    <p className="text-lg font-normal">{project.description}</p>
                                    <h1 className='text-lg font-normal flex md:flex-row flex-col md:gap-4 gap-1'>{project.tags.map((tag, indx) => <span key={indx} className='flex gap-1 items-center'><BiHash className='text-blue-500 text-xl font-light' />{tag}</span>)}</h1>
                                    <div className="flex gap-10">
                                        <a href={project.link} target="_blank" className="text-blue-500 hover:text-red-400 transition-all flex gap-2 items-center font-semibold"> Visit Site<BiLink /></a>
                                        <a href={project.github} target="_blank" className="text-blue-500 hover:text-red-400 transition-all flex gap-2 items-center font-semibold">Github<BiLink /></a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProjectList