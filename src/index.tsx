import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { HerosApp } from './HerosApp';

ReactDOM.render(
    <React.StrictMode>
        <HerosApp />
    </React.StrictMode>,
    document.getElementById('root')
);
