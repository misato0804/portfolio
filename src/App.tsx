import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
      <div className="App common">
        <h3 className="z-0 fixed text-9xl origin-bottom-left rotate-90 text-back-text top-40 left-0 font-extrabold">Hi,there!!</h3>
        < Router>
          < Nav />
          <Routes>
            < Route path="/" element={<Home/>}/>
            < Route path="/about" element={<About/>}/>
            < Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
