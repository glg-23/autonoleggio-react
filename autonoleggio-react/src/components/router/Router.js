import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Info from '../informazioni/Informazioni'

import ListaAuto from '../listaAuto/ListaAuto'
import ChiSiamo from '../chiSiamo/ChiSiamo'
import Contatti from '../contatti/Contatti'
import Login from '../login/Login'

import NoPage from '../noPage/NoPage';

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="home" element={<Home />} />
                    <Route index path="" element={<Info />} />
                    <Route path="informazioni" element={<Info />} />

                    <Route path="login" element={<Login />} />
                    <Route path="listaAuto" element={<ListaAuto />} />
                    <Route path="chiSiamo" element={<ChiSiamo />} />
                    <Route path="contatti" element={<Contatti />} />

                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
