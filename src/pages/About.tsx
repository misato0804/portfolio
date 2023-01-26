import React from 'react';
import {useTranslation} from "react-i18next";

const About = () => {

    type aboutMe = {
        title: string;
        description: string;
        logo?: string
    }

    const {t, i18n} = useTranslation();

    const AboutMe: aboutMe[] = [
        {
            title: `${t("about.current.title")}`,
            description: `${t("about.current.description")}`
        },
        {
            title: `${t("about.past.title")}`,
            description: `${t("about.past.description")}`
        }
    ]

    const hobbies: aboutMe[] = [
        {
            title: `${t("about.pleasure.hiking.title")}`,
            description: `${t("about.pleasure.hiking.description")}`
        },
        {
            title: `${t("about.pleasure.leaningLanguage.title")}`,
            description: `${t("about.pleasure.leaningLanguage.description")}`
        }
    ]

    return (
        <>
            <h3 className="-z-10 fixed text-9xl origin-bottom-left rotate-90 text-back-text top-40 left-0 font-extrabold">About
                me.</h3>
            <section>
                <h1 className="text-4xl font-extrabold">About me.</h1>
                <h2 className="mt-10 text-xl font-extrabold">Along the way of my career</h2>
                <div className="mt-6">
                    {AboutMe.map(item =>
                        <ul className="about-container relative ">
                            <li className="list-circle pl-8 pb-12 mt-[12px]">
                                <h3 className="underline font-bold text-lg">{item.title}</h3>
                                <p className="mt-4 text-sm leading-6">
                                    {item.description}
                                </p>
                            </li>
                        </ul>)}
                </div>
                <h2 className="mt-20 text-xl font-extrabold z-10">A bit more about me...</h2>
                <div className="mt-6">
                    {hobbies.map(item =>
                        <ul className="about-container relative ">
                            <li className="list-circle pl-8 pb-20 mt-[12px]">
                                <h3 className="underline font-bold text-lg">{item.title}</h3>
                                <p className="mt-4 text-sm leading-6">
                                    {item.description}
                                </p>
                            </li>
                        </ul>)}
                </div>
            </section>
        </>
    );
};

export default About;
