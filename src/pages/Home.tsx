import React, {useEffect} from 'react';
import Button from "../components/partials/Button";
import {Link} from "react-router-dom";
import Projects from "../components/Projetcs";

const Home = () => {

    const ref = React.createRef<HTMLDivElement>()
    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
            behavior: 'smooth'
        })
    }, [ref])

    return (
        <section className="relative w-4/5 mt-20 mx-auto text-center z-10">
            <div className="w-full m-auto">
                <h3 className="sub-title">Hi, there. I'm Misato Tanno</h3>
                <h1 className="font-extrabold text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-amber-200 via-back-text to-cyan-50 animate-animationTexted">Web
                    developer</h1>
                <p className="description mt-12">Currently based in Vancouver.<br/>My motivation and interest for
                    development have brought me to where I am today.<br/>I enjoy my learning journey, which never ends!!
                </p>
                <h2 className="font-bold text-sm mt-12">What would you like to create with me?</h2>
            </div>
            <div className="xl:grid xl:grid-cols-3 gap-4 xl:mt-8">
                <div id="scrollToProject" className="cursor-pointer mt-32" onClick={scrollToBottomOfList}>
                    <span className="relative inline-block text-lg group w-3/5 xl:w-full">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden leading-tight text-text-dark transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-text-dark">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[rgba(30,55,79,.6)]"></span>
                            <span className="absolute left-0 w-screen h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-back-text group-hover:-rotate-180 ease"></span>
                            <span className="relative">Project</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </span>
                </div>
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
                <h1 className="title my-20" ref={ref}>PROJECTS</h1>
                < Projects/>
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
