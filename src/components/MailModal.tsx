import React from 'react';
// import icon from "../images/check.png"

type modalProps = {
    showModal: boolean
}

const MailModal = ({showModal} : modalProps) => {
    return (
        <div
            className={`duration-300 ${showModal? "bg-[rgba(115,115,115,0.5)]": "invisible"} w-screen h-screen fixed flex justify-center items-center top-0 left-0`}>
            <div className={`duration-300 ${showModal? "bg-[rgba(225,225,225,1.0)]": "invisible"} px-12 py-4 flex justify-center items-center`}>
                <div className={`flex duration-300 ${showModal? "": "invisible"}`}>
                    {/*<img src={icon} alt="checkmark" className={`inline-block w-6 duration-300 ${showModal? "": "opacity-0"}`}/>*/}
                    <p className={`ml-4 text-black duration-300 ${showModal? "": "opacity-0"}`}>Thanks :)</p>
                </div>
            </div>
        </div>
    );
};

export default MailModal;