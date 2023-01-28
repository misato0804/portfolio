import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import './i18n';
import {ModalProvider} from "./util/modalContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ModalProvider>
            <App/>
        </ModalProvider>
    </React.StrictMode>
);

