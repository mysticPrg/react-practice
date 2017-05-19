import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import App from './containers/App';
import reducer from './reducers';
import './index.css';

const saga = createSagaMiddleware();
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(saga))
);

saga.run(sagas);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
	document.getElementById('root')
);

// https://react-practice-mysticprg.c9users.io