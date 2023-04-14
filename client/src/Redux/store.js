import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import logger from 'redux-logger'


const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    userReducer
})

const persisteReducer = persistReducer(persistConfig, reducers)

export const store = configureStore ({
    reducer: {
        persisteReducer
    },
    middleware:[],
})