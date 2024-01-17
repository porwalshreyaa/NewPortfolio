import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import Navbox from './Components/nav.js';
import Footer from './Components/footer.js';
import About from './Components/about.js';
import Home from './Components/home.js';
import Contact from './Components/contact.js';
import Projects from './Components/projects.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (<BrowserRouter>
    <div className="App">
      
      <Navbox />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
      
    </div></BrowserRouter>
  );
}

export default App;
