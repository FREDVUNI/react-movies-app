import React from 'react'
import { Grid } from '@mui/material'
import MovieCard from './MovieCard'

const MovieGrid = ({movies,type}) =>{
    return(
        <Grid sx={{ flexGrow:1 }} conatiner spacing={2} mt={3}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {
                        movies?.map((movie) =>{
                            return(
                                <div key={movie.id}>
                                    <Grid item>
                                        <MovieCard movie={movie} type={type}/>
                                    </Grid>
                                </div>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieGrid