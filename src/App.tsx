import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
 import About from './pages/AboutUs'  // example if you add more pages
import Projects from './pages/Projects'
import Contacts from './pages/Contact'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Example extra route */}
       <Route path="/about-us" element={<About />} /> 
       <Route path="/projects" element={<Projects />} /> 
       <Route path="/services" element={<Services />} /> 
       <Route path="/contacts" element={<Contacts />} /> 
    </Routes>
  )
}

export default App