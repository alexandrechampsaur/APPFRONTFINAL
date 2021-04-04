import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';

import paysReducer from './paysReducer';
import recettesReducer from './recettesReducer';
import detailsReducer from './detailsReducer';

const storage = createSecureStore();

const persistConfig = {
    key: "root",
    storage: storage,
};

const rootReducer = combineReducers({
    paysReducer: paysReducer,
    recettesReducer: recettesReducer,
    detailsReducer: detailsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = createStore(persistedReducer);
const persistor = persistStore(configureStore);

export {configureStore, persistor};




