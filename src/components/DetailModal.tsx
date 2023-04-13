import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {VscLinkExternal} from 'react-icons/vsc';
import projectDetail, {Project} from "../util/projectDetail";

type ModalProps = {
    clickedProject: string | undefined,
    setClickedProject: React.Dispatch<React.SetStateAction<string | undefined>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean
}

const DetailModal = ({clickedProject, setClickedProject, setShowModal, showModal}: ModalProps) => {

    const [project, setProject] = useState<Project>({
        title: '',
        description: '',
        skills: [""],
        image: '',
        github: "",
        link: ''
    })


    useEffect(() => {
        const projectHandler = () => {
            const newProject = projectDetail.find(item => item.title === clickedProject)
            newProject && setProject(newProject)
        }
        projectHandler()
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
        <>
            <div
                className={`${basicStyle} ${showModal ? "translate-x-0" : 'translate-x-full'} text-slate-50`}>
                <div className='relative h-full w-full'>
                    <div className='my-5'>
                        <AiOutlineClose
                            size={30}
                            onClick={() => {
                                setShowModal(false)
                                setClickedProject('')
                            }}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-left font-bold text-2xl mb-3'>{project.title}</h2>
                        <img
                            src={`${process.env.PUBLIC_URL + project.image} `}
                            className='object-cover object-center h-72 w-full mx-auto '
                        />
                    </div>
                    <div className='my-7 overflow-y-auto h-[37%] w-full'>
                        <h2 className='text-left font-bold text-2xl mb-3'>About</h2>
                        <h6 className='text-sm text-left'>{project.description}</h6>
                        <h2 className='text-left font-bold text-2xl mt-7 mb-3'>Technologies & Libraries</h2>
                        <div className='flex flex-wrap '>
                            {project.skills.map(skill => (
                                <span key={skill}
                                      className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs">
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-2 absolute bottom-0 w-screen md:w-[110%]  md:-mx-3 mx-[calc(50%-50vw)]'>
                        {project.title !== "Nature Buddy" ? <div className='bg-gray-800 py-4 cursor-pointer hover:opacity-50'>
                            <a href={project.link} target='_blank'>Go to demo site<VscLinkExternal
                                className='inline ml-2 pb-0.5'/></a>
                        </div> : null }
                        <div className={`bg-black py-4 cursor-pointer hover:opacity-50 ${project.title === 'Nature Buddy' ? 'col-span-2' : null}`}>
                            <a href={project.github} target='_blank'>Go to GitHub<AiFillGithub
                                className='inline ml-2 pb-0.5'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailModal;