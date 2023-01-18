import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Nav: FC = () => {
    const getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <nav className="py-12">
            <div className="flex justify-between items-center">
                <Link to={"/"}>
                    <img src={`${process.env.PUBLIC_URL+ '/logoMT.png'}`} width={50}/>
                </Link>
                {windowDimensions.width >= 768 ?
                    <ul className="m-0 w-3/5 flex justify-around font-thin">
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link to="/">Home</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link to="/about">About</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link to="/contact">Contact</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal cursor-pointer">Language</li>
                    </ul>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                }
            </div>
        </nav>
    );
};

export default Nav;