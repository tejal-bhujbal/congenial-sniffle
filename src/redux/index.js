import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducer';

let enhancer = applyMiddleware(thunk);

export const configureStore = () => {
    return createStore(rootReducer, enhancer);
};