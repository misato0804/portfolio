import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {VscLinkExternal} from 'react-icons/vsc'


type ModalProps = {
    clickedProject: string | undefined,
    setClickedProject: React.Dispatch<React.SetStateAction<string | undefined>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
}

const DetailModal = ({clickedProject, setClickedProject, setShowModal, showModal}: ModalProps) => {

    const [project, setProject] = useState()

    useEffect(() => {

        const projectHandler = () => {
        }

    }, [clickedProject])

    const basicStyle =
        'md:border-double ' +
        'md:border-l-8 ' +
        'fixed ' +
        'w-screen ' +
        'md:w-[50vw] ' +
        'lg:w-[40vw] ' +
        'h-screen ' +
        'top-0 ' +
        'right-0 ' +
        'z-[999] ' +
        'bg-bg-dark ease-in-out duration-300 px-4 py-3'


    return (
        <div
            className={`${basicStyle} ${showModal ? "translate-x-0" : 'translate-x-full'} text-slate-50`}>
            <div className='relative h-full w-full'>
                <div className='my-5'>
                    <AiOutlineClose
                        size={30}
                        onClick={() => {
                            setShowModal(false)
                        }}
                        className='cursor-pointer'
                    />
                </div>
                <div className='w-full'>
                    <h2 className='text-left font-bold text-2xl mb-3'>Title</h2>
                    <img
                        src={`${process.env.PUBLIC_URL + '/naturebuddy.jpg'}`}
                        className='object-cover object-center h-72 w-full mx-auto '
                    />
                </div>
                <div className='my-7'>
                    <h2 className='text-left font-bold text-2xl mb-3'>About</h2>
                    <p className='text-sm text-left'>This is full-stack application for every outdoor lover. You can
                        gather and
                        join outdoor activity through this appThis is full-stack application for every outdoor lover.
                        You can gather and join outdoor activity through this appThis is full-stack application for
                        every outdoor lover. You can gather and join outdoor activity through this app</p>

                    <h2 className='text-left font-bold text-2xl mt-7 mb-3'>Technologies</h2>
                    <div className='flex flex-wrap '>
                            <span
                                className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                            >React</span><span
                        className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                    >React</span><span
                        className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                    >React</span><span
                        className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                    >React</span>
                        <span
                            className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                        >React</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 absolute bottom-0 w-screen md:w-[110%]  md:-mx-3 mx-[calc(50%-50vw)]'>
                    <div className='bg-gray-800 py-4 cursor-pointer hover:opacity-50'>
                        <a href=''>Go to demo site<VscLinkExternal className='inline ml-2 pb-0.5'/></a>
                    </div>
                    <div className='bg-black py-4 cursor-pointer hover:opacity-50'>
                        <a href=''>Go to GitHub<AiFillGithub className='inline ml-2 pb-0.5'/></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailModal;