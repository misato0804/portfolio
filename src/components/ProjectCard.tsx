import React from 'react';

type project = {
    title: string;
    description: string;
    skills: string[];
    video: any;
    github: string;
    link: string;
}

const Project_card = (props: project) => {
    return (
        <div className="w-full h-[60%]">
            <div className="relative overflow-hidden w-full h-80 z-0 rounded-2xl">
                <video muted loop autoPlay className="min-w-full min-h-full object-cover rounded-2xl">
                    <source src={props.video} type="video/mp4"/>
                </video>

                <div
                    className="cursor-pointer absolute bottom-0 hover:opacity-95 opacity-0 duration-300 rounded-2xl bg-gradient-to-b from-[rgba(255,0,0,0)] to-[rgba(62,94,131,.8)] text-slate-50 z-10 text-left px-6 py-4">
                    <h2 className="title inline">{props.title}</h2>
                    <p className="description inline-block">{props.description}</p>
                    <div className="inline-block mt-4 flex flex-wrap">
                        {props.skills.map(skill =>
                            <span
                                key={skill}
                                className="inline-block px-4 rounded-2xl mr-2 mb-2 py-2 bg-neutral-300 text-back-text text-xs"
                            >
                                {skill}
                            </span>
                        )}
                    </div>
                    <div>

                        <a href={props.github} target="_blank">Github___</a>
                        <a href={props.link} target="_blank">Visit website___</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project_card;
