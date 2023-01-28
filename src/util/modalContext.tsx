import React, {createContext, ReactNode, useContext, useState} from "react";

type Props = {
    children : ReactNode
}

type modalContext = {
    openModal : boolean,
    setOpenModal : React.Dispatch<React.SetStateAction<boolean>>
}

const modalContext = createContext({} as modalContext)

export const useModalContext = () => {
    return useContext(modalContext)
}

export const ModalProvider = ({children}: Props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return <modalContext.Provider value={{openModal, setOpenModal}}>
        {children}
    </modalContext.Provider>

}