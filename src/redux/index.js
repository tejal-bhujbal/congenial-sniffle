import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let enhancer = applyMiddleware(thunk);

export const configureStore = () => {
    let store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store);
    return {store, persistor};
};