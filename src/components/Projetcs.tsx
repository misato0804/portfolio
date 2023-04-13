import React, {useState} from 'react';
import ProjectCard from "./ProjectCard";
import DetailModal from "./DetailModal";

const Projects = () => {

    const [clickedProject, setClickedProject] = useState<string | undefined>()
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
                title='PortFolio'
                image='/portfolio.jpg'
                description='My portfolio site which supports for English and Japanese.'
                github='https://github.com/misato0804/portfolio'
                link='https://github.com/misato0804/portfolio'
                skills={['React', 'Typescript', 'Tailwind CSS']}
                setClickedProject={setClickedProject}
                setShowModal={setShowModal}
            />
            <ProjectCard
                title='Jobseed'
                image='/jobseed.jpg'
                description='Helps job hunters to organize company information depends on its selection process.'
                github='https://github.com/keento0809/jobseed'
                link='https://jobseed.vercel.app/'
                skills={['React', 'Typescript', 'Tailwind CSS', 'PostgreSQL', 'Express']}
                setClickedProject={setClickedProject}
                setShowModal={setShowModal}
            />
            <ProjectCard
                title='Tourlist'
                image='/tourlist.jpg'
                description='Travel list in Japan. Using headless CMS for database.'
                github='https://github.com/misato0804/tourlist'
                link='https://tourlist.vercel.app/'
                skills={['React', 'Next13', 'Typescript','Tailwind CSS', 'Graph CMS', 'GraphQL']}
                setClickedProject={setClickedProject}
                setShowModal={setShowModal}
            />
            <ProjectCard
                title='Nature Buddy'
                image='/naturebuddy.jpg'
                description='This is full-stack application for every outdoor lover. You can gather and join outdoor activity through this app.'
                github='https://github.com/misato0804/nature-buddy'
                link='https://nature-buddy.vercel.app/'
                skills={['React', 'Next.js', 'NextAuth','Typescript','MUI', 'MongoDB', 'Socket.io']}
                setClickedProject={setClickedProject}
                setShowModal={setShowModal}
            />
            <ProjectCard
                title='P plane'
                image='/pplane.jpg'
                description='Helps new Japanese comers in Vancouver to find a mentor.'
                github=''
                link=''
                skills={['React', 'Typescript', 'Next.JS', 'MUI']}
                setClickedProject={setClickedProject}
                setShowModal={setShowModal}
            />
            { <DetailModal
                setShowModal={setShowModal}
                clickedProject={clickedProject}
                setClickedProject={setClickedProject}
                showModal={showModal}
            /> }
        </div>
    );
};

export default Projects;
