import React from 'react';
import Button from "../components/partials/Button";
import {Link} from "react-router-dom";
import Projects from "../components/Projetcs";

const Home = () => {
    return (
        <section className="relative w-4/5 mt-20 mx-auto text-center z-10">
            <div className="w-full m-auto">
                <h3 className="sub-title">Hi, there. I'm Misato Tanno</h3>
                <h1 className="font-extrabold text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-amber-200 via-back-text to-cyan-50">Web developer</h1>
                <p className="description mt-12">
                    You can also use variant modifiers to target media queries like responsive breakpoints, dark mode,
                    prefers-reduced-motion, and more. For example, use md:text-base to apply the text-base utility at
                    only medium screen sizes and above.</p>
                <h2 className="font-bold text-sm mt-12">What do you wanna create with me?</h2>
            </div>
            <div className="xl:grid xl:grid-cols-3 gap-4 xl:mt-8">
                < Button text={"projects"} mt={"mt-32 xl:mt-0"} link={"/about"}/>
                < Button text={"about me"} mt={"mt-12 xl:mt-0"} link={"/about"}/>
                < Button text={"get resume"} mt={"mt-12 xl:mt-0"} link={"/contact"}/>
            </div>
            <Link to="/contact">
                <div
                    className="line-frame h-24 w-screen mx-[calc(50%-50vw)] mt-16 opacity-75 bg-back-text flex justify-center items-center cursor-pointer"
                >
                    <div
                        className="rounded-lg py-4 px-8 border-double border-2 border-text-dark hover:bg-text-dark hover:text-back-text duration-300">
                        <Link className="" to={"/contact"}>Get in touch</Link>
                    </div>
                </div>
            </Link>
            <div className="work mt-8">
                <h1 className="title my-20">PROJECTS</h1>
                < Projects />
            </div>
            <div
                className="line-frame h-24 w-screen mx-[calc(50%-50vw)] mt-16 opacity-75 bg-back-text flex justify-center items-center cursor-pointer"
            >
                <div
                    className="rounded-lg py-4 px-8 border-double border-2 border-text-dark hover:bg-text-dark hover:text-back-text duration-300">
                    <Link className="" to={"/contact"}>Get in touch</Link>
                </div>
            </div>
        </section>
    )
        ;
};

export default Home;
