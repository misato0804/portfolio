import React from 'react';
import Project_card from "./ProjectCard";

const Projects = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Project_card
                title={"My portfolio"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["React", "Typescript", "Tailwind"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio"}
                link={"https://misatotanno.vercel.app/"}
            />
            <Project_card
                title={"Job seed"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["React", "Typescript", "Tailwind", "MUI", "Node.js"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio_TS"}
                link={"https://tailwindcss.com/docs/cursor"}
            />
            <Project_card
                title={"Van stage"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["React", "Typescript", "Tailwind", "MUI", "Node.js"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio_TS"}
                link={"https://tailwindcss.com/docs/cursor"}
            />
            <Project_card
                title={"Nature Buddy"}
                description={"lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world."}
                skills={["Next.js", "Typescript", "MUI", "Node.js", "MongoDB"]}
                video={`${process.env.PUBLIC_URL}/movie.mp4`}
                github={"https://github.com/misato0804/portfolio_TS"}
                link={"https://tailwindcss.com/docs/cursor"}
            />
        </div>
    );
};

export default Projects;
