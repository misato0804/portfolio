import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useModalContext} from "../util/modalContext";

type ModalProps = {
    setLang:  React.Dispatch<React.SetStateAction<string>>
}

const ModalMenu: React.FC<ModalProps> = ({setLang} : ModalProps) => {

    const {t, i18n} = useTranslation();
    const {setOpenModal} = useModalContext()
    const navigate = useNavigate()

    const clickLinkHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        const link = e.currentTarget.innerText
        e.preventDefault()
        setOpenModal(false)
        switch (link) {
            case "Home":
            case "ホーム":
                navigate(`/`)
                break
            case "About":
            case "アバウト":
                navigate("/about")
                break
            case "Resume":
            case "履歴書":
                navigate("/resume")
                break
            case "Contact":
            case "連絡先":
                navigate("/contact")
                break
        }
    }

    return (
        <div className="navbar-menu relative z-[1001] ">
            <div className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-25"></div>
            <nav
                className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-back-text border-r overflow-y-auto ">
                <div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold leading-none" href="#">
                        <img src={`${process.env.PUBLIC_URL + '/logoMT.png'}`} alt="" width={50}/>
                    </a>
                    <button
                        className="navbar-close"
                        onClick={() => setOpenModal(false)}
                    >
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className="mb-1">
                            <span className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-back-text rounded"
                                    onClick={clickLinkHandler}
                            >{t("nav.home")}</span>
                        </li>
                        <li className="mb-1">
                            <span className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-back-text rounded"
                                    onClick={clickLinkHandler}
                            >{t("nav.about")}</span>
                        </li>
                        <li className="mb-1">
                            <span className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-back-text rounded"
                                    onClick={clickLinkHandler}
                            >{t("nav.resume")}</span>
                        </li>
                        <li className="mb-1">
                            <span className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-back-text rounded"
                                    onClick={clickLinkHandler}
                            >{t("nav.contact")}</span>
                        </li>
                        <li className="mb-1">
                            <select onChange={(event) =>setLang(event.target.value)} id="languages" className="block w-full p-4 text-sm font-semibold text-gray-400 bg-back-text hover:bg-blue-50 hover:text-back-text rounded" >
                                <option selected>{t("nav.languages")}</option>
                                <option value="en">{t("nav.language.en")}</option>
                                <option value="ja">{t("nav.language.ja")}</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <p className="my-4 text-xs text-center text-gray-400">
                        <span>Copyright © 2023 Misato Tanno</span>
                    </p>
                </div>
            </nav>
        </div>
    );
};

export default ModalMenu;