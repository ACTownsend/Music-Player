import React from "react";
import ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

import { BrowserRouter as Router} from "react-router-dom";


const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);
root.render(

    <React.StrictMode>
        <Router>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App />
            </StateProvider>
        </Router>

    </React.StrictMode>,
    

    ); 
