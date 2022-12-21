import { configureStore } from '@reduxjs/toolkit'
import { MoviesApi } from '../services/MoviesApi'
import movieReducer from '../features/AddMovies/MovieSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key:"root",
    version:1,
    storage
}


const reducer = combineReducers({
    [MoviesApi.reducerPath]: MoviesApi.reducer,
    movies:movieReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(MoviesApi.middleware)
})
