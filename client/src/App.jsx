import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import GetInTouch from './pages/GetInTouch';
import ProjectList from './pages/ProjectList';
import ResponsiveSidebar from './components/ResponsiveSidebar';

const App = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.history.scrollRestoration = 'manual';
  }, [])

  return (
    <BrowserRouter>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ResponsiveSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<Home isMenuOpen={isMenuOpen}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projectlist" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/getintouch" element={<GetInTouch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;