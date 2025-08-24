import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experirence from './pages/Experience'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experirence />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;