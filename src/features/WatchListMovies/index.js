import React from 'react'
import { Container,Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { watchListMovies } from '../AddMovies/MovieSlice'
import MovieGrid from '../../components/MovieGrid'
import Message from '../../components/Message'

const WatchListMovies = () => {
    const list = useSelector(watchListMovies)
    console.log("watched",list)
    
    return (
        <Container fixed>
            <Typography variant="h4" style={{ fontWeight:"600" }} mt={4}>
                Watch List
            </Typography>
            {
                list.length > 0 ? (
                    <>
                        <MovieGrid movies = {list} type="watchList"/>
                    </>
                ):(
                    <>
                        <Message title="No watch list movies available yet. Please Add some."/>
                    </>
                )
            }
        </Container>
    )
}

export default WatchListMovies
