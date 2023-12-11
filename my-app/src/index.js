import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";
import data from "./Data/data";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderDOM = (state) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App data={data}/>
            </Provider>
        </BrowserRouter>
    );
}
rerenderDOM(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state)
});