import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import DataLayerComponent from './data-layer';
import RoutesComponent from './routes';

import AlertsComponent from "./components/alerts";
import NavBar from "./components/nav-bar";
import ScrollToComponent from "./components/scroll-to";

import './style.scss';

/**
 * Base application component
 */
const AppComponent = () => {
    return <DataLayerComponent>
        <BrowserRouter>
            <NavBar/>
            <ScrollToComponent/>
            <RoutesComponent/>
            <AlertsComponent/>
        </BrowserRouter>
    </DataLayerComponent>;
};

export default AppComponent;
