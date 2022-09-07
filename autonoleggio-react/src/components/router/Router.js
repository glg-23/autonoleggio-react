import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import NoPage from '../noPage/NoPage';

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="home" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
