import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';
const initialState = {};
const middleware = [thunk,promiseMiddleware];

const store = createStore(rootReducer,initialState,
                            compose(
                                applyMiddleware(...middleware),
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            ));

export default store;