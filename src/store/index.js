import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import importDataMiddleware from '../components/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(importDataMiddleware));

const store = createStore(reducer, enhancers);

export default store;
