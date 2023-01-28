import React, {useEffect, useRef, useState} from 'react';
import useCopyToClipboard from "../util/useCopyClipboard";
import emailjs from '@emailjs/browser';
import MailModal from "../components/MailModal";

const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID
const publicId: string | undefined = process.env.REACT_APP_PUBLIC_KEY

const Contact = () => {
    const [value, copy] = useCopyToClipboard();
    const [showMessage, setShowSuccessMessage] = useState<boolean>(false)
    const [showThanks, setShowThanks] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null!)

    const clickHandler = async () => {
        const showTimer = setTimeout(() => {
            setShowSuccessMessage(false)
        }, 3000)
        setShowSuccessMessage(true)
        await copy("breitmeer.0804@gmail.com")
        await showTimer
    }
    const successToCopy = (
        <div className={`${showMessage ? "opacity-100" : "opacity-0"} absolute duration-300 fixed top-2 left-44`}>copied
            to clipboard</div>)

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(formRef.current)
        emailjs
            .sendForm(serviceId!, templateId!, formRef.current, publicId!)
            .then(result => {
                setShowThanks(true)
                setTimeout(() => {
                    setShowThanks(false)
                }, 3000)
                formRef.current.reset();
                console.log(result.text)
            }, error => {
                console.log(error.text)
            })
    }

    return (
        <>
            <h3 className="z-0 fixed text-9xl origin-bottom-left rotate-90 text-back-text top-40 left-0 font-extrabold">Contact.</h3>
            <section className="relative z-[100]">
                <div className="flex justify-center m-auto max-w-5xl">
                    <div>
                        <div className="mb-6 relative">
                            <h1 className="mb-4 text-4xl font-extrabold">Contact.</h1>
                            {successToCopy}
                            <p>Please fill out this form or send me an email at&ensp;
                                <span
                                    className="underline cursor-pointer font-bold"
                                    onClick={clickHandler}
                                >breitmeer.0804@gmail.com</span>
                            </p>
                            <br/>
                            <p>I am excited about talking with you :)</p>
                        </div>
                        <form action="" ref={formRef}>
                            <div className="mb-6">
                                <input
                                    autoComplete={"off"}
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="text-sm border-1 border-grey-800 rounded-md p-3 w-full focus:outline-none bg-back-text"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    autoComplete="off"
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="text-sm border-1 border-grey-800 rounded-md p-3 w-full focus:outline-none bg-back-text"
                                />
                            </div>
                            <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="text-sm block h-48 resize-none border-1 border-grey-800 rounded-md p-3 w-full focus:outline-none bg-back-text"
                            />
                            </div>
                            <button
                                className="bg-text-dark py-3 px-4 rounded-xl text-bg-dark text-sm mt-6"
                                onClick={sendEmail}
                            >SendMessage
                            </button>
                        </form>

                    </div>
                </div>

                <MailModal showModal={showThanks}/>
            </section>
        </>
    );
};

export default Contact;
