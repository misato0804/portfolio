import React, {useState} from 'react';
import {RiExternalLinkFill} from "react-icons/ri"
import DetailModal from "./DetailModal";

type project = {
    title: string;
    description: string;
    skills: string[];
    video?: any;
    image: any;
    github: string;
    link?: string;
    setClickedProject:React.Dispatch<React.SetStateAction<string | undefined>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Project_card = (props: project) => {

    return (
        <>
            <div
                className={`w-full relative rounded-xl text-white `}
            >
                <img src={`${process.env.PUBLIC_URL + props.image}`}
                     className="min-w-full h-96 object-cover object-bottom rounded-2xl object-left-bottom"/>
                <div
                    className={`rounded-xl w-full h-full absolute bottom-0 hover:opacity-95 opacity-0 duration-300  bg-gradient-to-b from-[rgba(155,194,228,0.3)] to-[rgba(0,0,0,1)] z-10 text-left`}>
                    <div className='absolute bottom-0'>
                        <div className='px-6 py-4'>
                            <h2 className="title">{props.title}</h2>
                            <p className="description inline-block">{props.description}</p>
                            <div className="inline-block mt-4 flex flex-wrap">
                                {props.skills.map(skill =>
                                    <span
                                        key={skill}
                                        className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                                    >{skill}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div
                                onClick={() => {
                                    props.setClickedProject(props.title)
                                    props.setShowModal(true)
                                }}
                                className='w-full bg-cyan-950 text-center py-3 cursor-pointer rounded-b-xl hover:opacity-70'>
                                <h3>Show detail</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project_card;
