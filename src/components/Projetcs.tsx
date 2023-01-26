import React from 'react';
import Project_card from "./ProjectCard";

const Projects = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Project_card
                title={"My portfolio"}
                description={"Full-stack CRUD application with user auth.\nIt can help you organize"}
                skills={["React", "Typescript", "Tailwind"]}
                video={`${process.env.PUBLIC_URL}/portfolio.mov`}
                github={"https://github.com/misato0804/portfolio"}
                link={"https://misatotanno.vercel.app/"}
            />
            <Project_card
                title={"Job seed"}
                description={"Full-stack CRUD application with user auth.\nIt can help you organize your schedule of job hunting."}
                skills={["React", "Typescript", "Tailwind", "Node.js", "PostgreSQL", "Redux"]}
                image={`${process.env.PUBLIC_URL}/jobseed.png`}
                github={"https://github.com/keento0809/jobseed"}
                link={"https://jobseed.vercel.app/"}
            />
            <Project_card
                title={"Nature Buddy"}
                description={"This application is a platform for finding buddies to go on activities you like."}
                skills={["Next.js", "Typescript", "MUI", "Styled component","Node.js", "GraphQL"]}
                image={`${process.env.PUBLIC_URL}/comingsooon.png`}
                github={"https://github.com/misato0804/nature-buddy"}
                // link={"https://tailwindcss.com/docs/cursor"}
            />
        </div>
    );
};

export default Projects;
