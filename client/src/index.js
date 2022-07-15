import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './components/ContextApi/reducer';
import {StateProvider} from "./components/ContextApi/StateProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initalState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);


