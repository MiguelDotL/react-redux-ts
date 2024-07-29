import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = container && createRoot(container); // createRoot(container!) if you use TypeScript

root?.render(
    <Provider store={store}>
        <App />
    </Provider>
);
