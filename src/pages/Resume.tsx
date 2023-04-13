import React, {useEffect, useRef} from 'react';
import resume from "../resume.pdf";
import {Link} from "react-router-dom";

const Resume = () => {

    const downloadPdf = () => {
        fetch(resume).then( res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = resume;
                alink.click();
            })
        })
    }

    return (
        <>
            <h3 className="-z-10 fixed text-9xl origin-bottom-left rotate-90 text-back-text top-10 left-0 font-extrabold">Resume.</h3>
            <section>
                <h1 className="text-4xl font-extrabold">Resume.</h1>
                <p className="mt-10">Thank you for taking a look my resume!</p>
                <p className="mb-10 tracking-wide">Would you like to
                    <Link to="/contact" className="underline"><strong> message me ?</strong></Link>
                    <span> or </span>
                    <span className="underline cursor-pointer" onClick={downloadPdf}><strong>download it ?</strong></span>
                </p>
                <img
                    className='mx-auto w-full md:w-3/5 z-[999] relative'
                    src={`${process.env.PUBLIC_URL + '/resume.png'}` }/>
            </section>
        </>

    );
};

export default Resume;