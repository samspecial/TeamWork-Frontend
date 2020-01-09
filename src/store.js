import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

const initialState = {};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;