import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const MovieSlice = createSlice({
    name:'movies',
    initialState:{
        watchList:[],
        watched:[]
    },
    reducers:{
        addWatchListMovie(state,action){
           state.watchList.push(action.payload)
           toast.success("Movie has been added to watch list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
        },
        addWatchedMovie(state,action){
            state.watchList = state.watchList.filter((movie) => movie.id !== action.payload.id)
            state.watched.push(action.payload)
            toast.success("Movie has been added to watched list",{
                position:toast.POSITION.BOTTOM_RIGHT
            })  

        },
        removeWatchListMovie(state,action){
            state.watchList = state.watchList.filter((movie) => movie.id !== action.payload)
            toast.success("Movie has been removed from watch list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
        },
        moveToWatchList(state,action){
            state.watched = state.watched.filter((movie) => movie.id !== action.payload.id)
            state.watchList.push(action.payload)
            toast.success("Movie has been moved to watch list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
        },
        removeWatchedMovie(state,action){
            state.watched = state.watched.filter((movie) => movie.id !== action.payload)
            toast.success("Movie has been removed from watched movies",{
                position:toast.POSITION.BOTTOM_RIGHT
            })
        }

    }
})

export const watchListMovies = (state) => state.movies.watchList
export const watchedMovies = (state) => state.movies.watched
export const { addWatchListMovie,addWatchedMovie,removeWatchListMovie,moveToWatchList,removeWatchedMovie } = MovieSlice.actions
export default MovieSlice.reducer