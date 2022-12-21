import React from 'react'
import { Container,Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { watchedMovies } from '../AddMovies/MovieSlice'
import MovieGrid from '../../components/MovieGrid'
import Message from '../../components/Message'

const WatchedMovies = () => {
    const list = useSelector(watchedMovies)
    return (
        <Container fixed>
            <Typography variant="h4" style={{ fontWeight:"600" }} mt={4}>
                Watched List
            </Typography>
            {
                list.length > 0 ? (
                    <>
                        <MovieGrid movies={list} type="watched"/>
                    </>
                ):(
                    <>
                        <Message title="No watched movies available yet. Please Add some."/>
                    </>
                )
            }
        </Container>
    )
}

export default WatchedMovies
