import React from 'react'
import { Box,Card,CardContent,CardMedia,Typography,Stack,Button } from '@mui/material'
import Moment from 'react-moment'
import { useDispatch,useSelector } from 'react-redux'
import { addWatchListMovie,watchListMovies,addWatchedMovie,watchedMovies } from '../features/AddMovies/MovieSlice'

const Movies = ({ movie }) =>{
    const dispatch = useDispatch()
    const watchList = useSelector(watchListMovies)
    const watched = useSelector(watchedMovies)

    let ExistInWatchList = watchList.find((list) => list.id === movie.id)
    let ExistInWatched = watched.find((list) => list.id === movie.id)

    let disablewatchListButton = ExistInWatchList ? true : ExistInWatched ? true : false
    let disablewatchedButton = ExistInWatched ? true : false

    return(
        <Card sx={{ display:"flex", height: 300, m:2 }}>
            { movie.poster_path ?
                <CardMedia component="img" sx={{ width:180 }} image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/> : <CardMedia component="img" sx={{ width:151 }} image={`https://via.placeholder.com/800`}/>
            }
            <Box sx={{ display:"flex", flexDirection:"column" }}>
                <CardContent sx={{ flex:"1 0 auto" }}>
                    <Typography component="div" variant="h4">
                        { movie.title.substring(0,45) }
                    </Typography>
                    <Typography variant="p">
                        { movie.overview ? movie.overview.substring(0,220) + '...':'No description available.' }
                    </Typography>
                    <Typography color="text.sexondary" component="div">
                        {
                            movie.release_date ?
                            <Moment format="YYYY">{movie.release_date}</Moment>: 'No release date'
                        }
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ mt:2 }}>
                        <Button disabled = {disablewatchListButton} variant="contained" onClick={ () => dispatch(addWatchListMovie(movie))}>Add to watchlist</Button>
                        <Button disabled = {disablewatchedButton} variant="contained" onClick={ () => dispatch(addWatchedMovie(movie))}>Add to watched</Button>
                    </Stack>
                </CardContent>
            </Box>
        </Card>
    )
}

export default Movies