export type Project = {
    id?: number,
    title: string
    description: string
    link: string
    github: string
    skills: string[]
    image: string
}

const projectDetail : Project[] = [
    {
        id: 1,
        title: 'PortFolio',
        description: "This is my first type oriented project using React. Main supported language is English but it can show in Japanese as well. I used .json file to store data of both language. \n\nIf you are interested in me about anything, you can reach me out from contact page.",
        link:'https://github.com/misato0804/portfolio',
        github: 'https://github.com/misato0804/portfolio',
        skills: ['React', 'Typescript', 'Tailwind CSS', 'Email.js','i18next'],
        image: '/portfolio.jpg'
    },
    {
        id:2,
        title: 'Jobseed',
        description: "This is a collaborative project. The application is for all job hunters and allows users to organize and track information about companies. Once you apply to a company, you can store data such as location, schedule, URL, and more. \n\nI was in charge of frontend and worked with React,Typescript and Tailwind. Additionally, I managed the user login state using JWT token and cookies.",
        link:'https://jobseed.vercel.app/',
        github: 'https://github.com/keento0809/jobseed',
        skills: ['React', 'Typescript', 'Tailwind CSS', 'PostgreSQL', 'Express'],
        image: '/jobseed.jpg'
    },
    {
        id:3,
        title: 'Nature Buddy',
        description: "*under maintenance \n\n\nThis is a full-stack application that allows users to find people with whom they can engage in outdoor activities. Once register, user can create and join activities. This enables account creation through existing Google, Facebook, and Github accounts by NextAuth.\n\nI am working on adding a real-time chat feature to allow users to communicate with each other",
        link:'https://nature-buddy.vercel.app/',
        github: 'https://github.com/misato0804/nature-buddy',
        skills: ['React', 'Next.js', 'NextAuth','Typescript','MUI', 'MongoDB', 'Socket.io'],
        image: '/naturebuddy.jpg'
    },
    {
        id:4,
        title: 'Tourlist',
        description: "This is my fun project that utilizes the latest version of Next.js. If you have any plans to visit Japan, specifically Tokyo, Osaka, and Kyoto, this is perfect for you.  I enjoyed creating content APIs with a headless CMS.\n\n Also this project helped me understand the differences between SSR and SSG.",
        link:'https://tourlist.vercel.app/',
        github: 'https://github.com/misato0804/tourlist',
        skills: ['React', 'Next13', 'Typescript','Tailwind CSS', 'Graph CMS', 'GraphQL'],
        image: '/tourlist.jpg'
    },
    {
        id:5,
        title: 'P plane',
        description: "Ongoing collaborative project with UI/UX designers. \n\nThis application helps newcomers to Vancouver, especially those in the tech field, find a mentor.  And you can find a mentor who matches your schedule, categories, and budget.",
        link:'https://vanstage-next-one.vercel.app/',
        github: 'https://github.com/keento0809/vanstage-next',
        skills: ['React', 'Next.js', 'Typescript','MUI', 'Graph CMS', 'GraphQL'],
        image: '/pplane.jpg'
    }
]

export default projectDetail