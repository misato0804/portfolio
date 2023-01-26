import React from 'react';
import Project_card from "./ProjectCard";

const Projects = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Project_card
                title={"My portfolio"}
                description={""}
                skills={["React", "Typescript", "Tailwind"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio"}
                link={"https://misatotanno.vercel.app/"}
            />
            <Project_card
                title={"Job seed"}
                description={"Full-stack CRUD application with user auth.\nIt can help you organize your schedule of job hunting."}
                skills={["React", "Typescript", "Tailwind", "Node.js", "PostgreSQL", "Redux"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/keento0809/jobseed"}
                link={"https://jobseed.vercel.app/"}
            />
            <Project_card
                title={"Nature Buddy"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["Next.js", "Typescript", "MUI", "Styled component","Node.js", "GraphQL"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/nature-buddy"}
                // link={"https://tailwindcss.com/docs/cursor"}
            />
        </div>
    );
};

export default Projects;
