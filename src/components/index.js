import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './components/StateProvider';
import reducer, {initialState} from './components/reducer';

reactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer = {reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

//If you wnat your app to work offline and load faster, you can chane
//unregister() to register() below. Note this comes with some pitfalls.
//Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
