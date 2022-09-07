import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import NoPage from '../noPage/NoPage';
import InCostruzione from '../inCostruzione/InCostruzione';

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="home" element={<Home />} />

                    <Route path="login" element={<InCostruzione />} />
                    <Route path="listaAuto" element={<InCostruzione />} />
                    <Route path="chiSiamo" element={<InCostruzione />} />
                    <Route path="contatti" element={<InCostruzione />} />

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
