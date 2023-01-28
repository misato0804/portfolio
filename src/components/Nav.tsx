import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {useModalContext} from "../util/modalContext";
import ModalMenu from "./ModalMenu";

const Nav: FC = () => {
    const [t, i18n] = useTranslation();
    const [lang, setLang] = useState('en');

    const setLanguage = (e: React.ChangeEvent<{ value: string }>) => {
        setLang(e.target.value)
    }

    const {openModal,setOpenModal} = useModalContext()

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    const getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const onResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <nav className="py-12">
            <div className="flex justify-between items-center">
                <Link to={"/"}>
                    <img src={`${process.env.PUBLIC_URL + '/logoMT.png'}`} width={50}/>
                </Link>
                {windowDimensions.width >= 768 ?
                    <ul className="m-0 w-3/5 flex justify-around font-thin">
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link
                            to="/">{t("nav.home")}</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link
                            to="/about">{t("nav.about")}</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link
                            to="/resume">{t("nav.resume")}</Link></li>
                        <li className="inline-block duration-150 hover:animate-shake-horizontal"><Link
                            to="/contact">{t("nav.contact")}</Link></li>
                        <select id="languages" className="bg-bg-dark cursor-pointer" onChange={setLanguage}>
                            <option selected>{t("nav.languages")}</option>
                            <option value="en">{t("nav.language.en")}</option>
                            <option value="ja">{t("nav.language.ja")}</option>
                        </select>
                    </ul>
                    :
                    <div onClick={() => setOpenModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </div>
                }
            </div>
            {openModal && windowDimensions.width < 768 ? <ModalMenu setLang={setLang}/> : null}
        </nav>
    );
};

export default Nav;