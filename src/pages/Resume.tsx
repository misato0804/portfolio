import React from 'react';
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import resume from "../misatotanno.pdf";
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
        <section>
            <h3 className="z-0 fixed text-9xl origin-bottom-left rotate-90 text-back-text top-40 left-0 font-extrabold">Resume.</h3>
            <h1 className="text-4xl font-extrabold">Resume.</h1>
            <p className="mt-10">Thank you for taking a look my resume!</p>
            <p className="mb-10 tracking-wide">Would you like to
                <Link to="/contact" className="underline"><strong> message me ?</strong></Link>
                <span> , </span>
                <a href="https://1drv.ms/b/s!AmRGcW1ZJmKdgcF6sa7uYiCIT4yq8w?e=QS28Ap" className="underline cursor-pointer"><strong> view this resume ?</strong> </a>
                <span> or </span>
                <span className="underline cursor-pointer" onClick={downloadPdf}><strong>download it ?</strong></span>
            </p>

            <div className="flex justify-center">
                <Document file={resume} size="A4" >
                    <Page pageNumber={1} />
                </Document>
            </div>
        </section>
    );
};

export default Resume;