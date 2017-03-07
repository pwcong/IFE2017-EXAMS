import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

import App from './view/app';

/**
 * 初始化store，用于状态管理
 */
const store = createStore(
	reducer, 
	applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);