import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const MoviesApi = createApi({
    reducerPath:"MoviesApi",
    baseQuery:fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API}`}),
    endpoints:(builder)=>({
        getMovies:builder.mutation({
        query:({ query }) =>{
            return{
                url:`/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US$page=1&include_adult=false&query=${query}`,
                method:'get'
            }
        }
    })
    }),
})

export const { useGetMoviesMutation } = MoviesApi