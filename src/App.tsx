import React, {Suspense} from 'react';
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
    return (
        <Suspense fallback="loading">
            <div className="common">
                < Router>
                    < Nav/>
                    <Routes>
                        < Route path="/" element={<Home/>}/>
                        < Route path="/about" element={<About/>}/>
                        < Route path="/contact" element={<Contact/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        </Suspense>
    );
}

export default App;
