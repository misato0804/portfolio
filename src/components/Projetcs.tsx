import React from 'react';
import Project_card from "./ProjectCard";

const Projects = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Project_card
                title={"Project1"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["HTML", "React", "Typescript", "Tailwind", "MUI", "Node.js"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio_TS"}
                link={"https://tailwindcss.com/docs/cursor"}
            />
            <Project_card
                title={"Project1"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["HTML", "React", "Typescript", "Tailwind", "MUI", "Node.js"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio_TS"}
                link={"https://tailwindcss.com/docs/cursor"}
            />
        </div>
    );
};

export default Projects;
