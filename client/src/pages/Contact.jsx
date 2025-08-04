import { motion } from 'framer-motion'
import { IoCall } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full min-h-screen font-quicksand'>
            <motion.div className='lg:mx-30 mx-5 lg:mt-40 mt-30 mb-10 lg:w-[600px]' animate={{ translateX: 0 }} initial={{ translateX: -600 }} transition={{ duration: 0.5 }}>
                <h1 className='text-[50px] font-bold'>Let's Connect!</h1>
                <p className='text-lg font-normal' >I’m always open to discussing new projects, ideas, or opportunities. Feel free to reach out and let’s chat</p>
            </motion.div>
            <div className='lg:mx-30 mx-5 flex lg:flex-row flex-col md:justify-between gap-10'>
                <motion.div className='flex flex-col items-center text-center gap-4' animate={{ translateX: 0 }} initial={{ translateX: -600 }}  transition={{ duration: 0.5 }}>
                    <MdEmail className='text-4xl text-blue-500' />
                    <h1 className='text-2xl font-bold'>Email</h1>
                    <p className='text-lg font-normal'>Feel free to reach out via email at <span className='text-blue-500 cursor-pointer'>rahulrjp16@gmail.com</span>. I am eager to discuss potential collaborations or opportunities.</p>
                </motion.div>
                <motion.div className='flex flex-col items-center text-center gap-4' animate={{ translateY: 0 }} initial={{ translateY: 600 }} transition={{ duration: 0.5 }}>
                    <IoCall className='text-4xl text-blue-500' />
                    <h1 className='text-2xl font-bold'>Phone</h1>
                    <p className='text-lg font-normal'>You can also call me at <span className='text-blue-500 cursor-pointer'>+91-6299915927</span> for quick inquiries or to schedule a meeting.</p>
                </motion.div>
                <motion.div className='flex flex-col items-center text-center gap-4' animate={{ translateX: 0 }} initial={{ translateX: 600 }} transition={{ duration: 0.5 }}>
                    <LuMapPin className='text-4xl text-blue-500' />
                    <h1 className='text-2xl font-bold'>Location</h1>
                    <p className='text-lg font-normal'>I am located in <span className='text-blue-500 cursor-pointer'>Kalinga E-state, Santarapur, Gohiria Square, Bhubaneshwar, Odisha, pin-752054</span>. You can view the location on the map below.</p>
                </motion.div>
            </div>
            <div className='flex justify-center my-20'>
                <button className={`px-4 py-2 bg-blue-400 border border-white  text-white hover:bg-blue-300 rounded-sm font-normal transition-all duration-300 cursor-pointer`} onClick={() => navigate('/contact/getintouch')}>Get in Touch</button>
            </div>
        </div>
    )
}

export default Contact