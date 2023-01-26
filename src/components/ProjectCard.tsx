import React from 'react';

type project = {
    title: string;
    description: string;
    skills: string[];
    video?: any;
    image?: any;
    github: string;
    link?: string;
}

const Project_card = (props: project) => {
    return (
        <div className="w-full">
            <div className="relative overflow-hidden w-full z-0 rounded-2xl">
                { props.video ? <video muted loop autoPlay id="background-video" className="min-w-full h-96 object-cover rounded-2xl">
                    <source src={props.video} type="video/mp4"/>
                </video>
                  : <img src={props.image} className="min-w-full h-96 object-cover rounded-2xl object-left-bottom"/>}
                <div
                    className={`w-full absolute bottom-0 hover:opacity-95 opacity-0 duration-300 rounded-2xl bg-gradient-to-b from-[rgba(175,164,112,0.5)] to-[rgba(62,94,131,1)] ${props.title === "My portfolio" ? "text-slate-50" : "text-black"} z-10 text-left px-6 py-4`}>
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

                        <a href={props.github} target="_blank">Github__&nbsp;&nbsp;&nbsp;</a>
                        {props.link ? <a href={props.link} target="_blank">Visit website__</a> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project_card;
