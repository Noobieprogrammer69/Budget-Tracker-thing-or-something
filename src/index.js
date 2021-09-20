import React from 'react';
import ReactDOM from 'react-dom';
import  { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="f1a1e9ef-eed6-4979-afb0-5ae1bdaf58e7" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
document.getElementById('root')
);