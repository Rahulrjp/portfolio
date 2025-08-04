import { Link, NavLink, useNavigate } from 'react-router-dom'

const ResponsiveSidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    setTimeout(() => setIsMenuOpen(false), 300)
  }

  return (
    <div className={`w-[300px] h-screen fixed top-0 z-50 bg-white lg:hidden transition-all duration-200 font-quicksand ${isMenuOpen ? 'left-0' : '-left-[300px]'}`}  >
      <Link to="/"><h1 className={`text-4xl font-semibold tracking-[8px] font-bitcount p-4`} onClick={handleClick}>Portfolio</h1></Link>
      <div className='py-10'>
        <ul className='flex flex-col md:hidden  md:gap-12 gap-5 text-xl font-semibold pl-10 '>
          <NavLink to="/"
            className={({ isActive }) => `${isActive ? "md:border-b-3 border-b-red-500 md:text-gray-50 text-red-500" : "text-gray-400"} transition-all duration-100`}
            onClick={() => {setIsHomePage(true), handleClick()}}> <li>Home</li></NavLink>
          <NavLink to="/about"
            className={({ isActive }) => `${isActive ? "md:border-b-3 border-b-red-500 md:text-gray-800 text-red-500" : "text-gray-400"} transition-all duration-100`}
            onClick={() => {setIsHomePage(false), handleClick()}}> <li>About</li></NavLink>
          <NavLink to="/projects"
            className={({ isActive }) => `${isActive ? "md:border-b-3 border-b-red-500 md:text-gray-800 text-red-500" : "text-gray-400"} transition-all duration-100`}
            onClick={() => {setIsHomePage(false), handleClick()}}> <li>Projects</li></NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => `${isActive ? "md:border-b-3 border-b-red-500 md:text-gray-800 text-red-500" : "text-gray-400"} transition-all duration-100`}
            onClick={() => {setIsHomePage(false), handleClick()}}> <li>Contact</li></NavLink>
        </ul>

        <div className=' flex flex-col p-10 gap-6'>
          <button className={`px-4 py-2 bg-white border text-blue-400 hover:bg-blue-400 hover:text-white border-blue-400 rounded-sm font-normal transition-all duration-300 cursor-pointer`} onClick={() => {navigate('/projects/projectlist'), handleClick()}} >View Projects</button>
          <button className={`px-4 py-2 bg-blue-400 border border-white text-white hover:bg-blue-300 rounded-sm font-normal transition-all duration-300 cursor-pointer`} onClick={() =>{ navigate('/contact/getintouch'),handleClick()}}>Get in Touch</button>

        </div>
      </div>
    </div>
  )
}

export default ResponsiveSidebar