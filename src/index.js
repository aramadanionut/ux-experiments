import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.react';

var div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(<App />, div);