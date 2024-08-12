import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './day0812/Counter';
import Counter3 from './day0812/Counter3';
import LunchMenu from './day0812/LunchMenu';
import TextInputWithFocusButton from './day0812/TextInputWithFocusButton';
import Accommodate from './day0812/Accommodate';
import Mission01 from './day0812/Mission01';
import Mission02 from './day0812/Mission02';
import ConsoleTest from './day0812/ConsoleTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConsoleTest />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
