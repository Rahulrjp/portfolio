import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { animated } from '@react-spring/web'
import { animation } from '../animations/animations.js'
import { BiMenu } from 'react-icons/bi'


const Navbar = ({isMenuOpen , setIsMenuOpen}) => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(false);
    const [getintouch, setGetintouch] = useState(false);
    const navigate = useNavigate()





    useEffect(() => {
        setIsHomePage(location.pathname === "/");
        setGetintouch(location.pathname === "/contact/getintouch")
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // Adjust threshold as needed
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <div className={`flex md:justify-around justify-between items-center z-40 fixed top-0 right-0 left-0 transition-all duration-400 px-8 md:px-0  ${scrolled && (isHomePage || getintouch) ? `${getintouch ? '' : 'border-b border-gray-700'}` : `${isHomePage || getintouch ? 'bg-transparent' : 'bg-white border-b border-gray-500'}`}`} style={{backdropFilter : scrolled&&getintouch?"blur(20px)": isHomePage?"blur(30px)":"" }} >
                <div className='py-4 text-center'>
                    <Link to="/"><animated.h1 style={{ ...animation().springLtoR }}
                        className={`text-4xl font-semibold tracking-[8px] font-bitcount ${isHomePage ? 'text-white' : `${getintouch ? "text-white" : 'text-black'}`}`}>Portfolio</animated.h1></Link>
                </div>
                <div className='py-4 text-center font-quicksand md:block hidden'>
                    <animated.nav style={{ ...animation().springUtoD }}>
                        <ul className='flex gap-12 text-md font-semibold pl-10'>
                            <NavLink to="/"
                                className={({ isActive }) => `${isActive ? "border-b-3 border-b-red-500" : ""} ${isHomePage ? "text-white" : `${getintouch ? "text-white" : ""}`} transition-all duration-100`}
                                onClick={() => setIsHomePage(true)}> <li>Home</li></NavLink>
                            <NavLink to="/about"
                                className={({ isActive }) => `${isActive ? "border-b-3 border-b-red-500 text-gray-800" : ""} ${isHomePage ? "text-white" : `${getintouch ? "text-white" : ""}`} transition-all duration-100`}
                                onClick={() => setIsHomePage(false)}> <li>About</li></NavLink>
                            <NavLink to="/projects"
                                className={({ isActive }) => `${isActive ? "border-b-3 border-b-red-500 text-gray-800" : ""} ${isHomePage ? "text-white" : `${getintouch ? "text-white" : ""}`} transition-all duration-100`}
                                onClick={() => setIsHomePage(false)}> <li>Projects</li></NavLink>
                            <NavLink to="/contact"
                                className={({ isActive }) => `${isActive ? "border-b-3 border-b-red-500 " : ""} ${isHomePage ? "text-white" : `${getintouch ? "text-white" : ""}`} transition-all duration-100`}
                                onClick={() => setIsHomePage(false)}> <li>Contact</li></NavLink>
                        </ul>
                    </animated.nav>
                </div>
                <animated.div className='lg:flex gap-4 font-quicksand hidden' style={{ ...animation().springRtoL }}>
                    <button className={`px-4 py-2 ${isHomePage ? "bg-black border text-white hover:bg-white hover:text-black border-white" : "bg-white border text-blue-400 hover:bg-blue-400 hover:text-white border-blue-400"}  rounded-sm font-normal transition-all duration-300 cursor-pointer`} onClick={() => navigate('/projects/projectlist')} >View Projects</button>
                    <button className={`px-4 py-2 ${isHomePage ? "bg-white border border-white text-black" : "bg-blue-400 border border-white text-white hover:bg-blue-300"} rounded-sm font-normal transition-all duration-300 cursor-pointer`} onClick={() => navigate('/contact/getintouch')}>Get in Touch</button>
                </animated.div>
                <div className='lg:hidden block'>
                    <BiMenu className={`${isHomePage || getintouch ? 'text-white' : 'text-black'} font-bold text-2xl`} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
        </>
    )
}

export default Navbar;