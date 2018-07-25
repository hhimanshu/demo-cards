import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AsciiMathDelim} from "./AsciiMathDelim";

ReactDOM.render(<AsciiMathDelim />, document.getElementById('root'));
registerServiceWorker();
