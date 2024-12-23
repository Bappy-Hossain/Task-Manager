import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.css';
import './assets/css/animate.min.css'
import './assets/css/style.css';
import App from './App';
import store from "./redux/store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
    </React.StrictMode>
);
