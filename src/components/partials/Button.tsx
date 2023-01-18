import React from 'react';
import {Link} from "react-router-dom";

type button = {
    text: string;
    mt: string;
    link: string;
}

const Button = (props: button) => {
    return (
        <div className={`${props.mt}`}>
            <Link to={props.link} className="relative inline-block text-lg group w-3/5 xl:w-full">
            <span className="relative z-10 block px-5 py-3 overflow-hidden leading-tight text-text-dark transition-colors duration-300 ease-out border-2 border-gray-700 rounded-lg group-hover:text-text-dark">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[rgba(30,55,79,.6)]"></span>
                <span className="absolute left-0 w-screen h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-back-text group-hover:-rotate-180 ease"></span>
                <span className="relative">{ props.text }</span>
            </span>
                <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg">

            </span>
            </Link>
        </div>
    );
};

export default Button;
