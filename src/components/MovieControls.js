import React from 'react'
import { styled,Stack,Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import {addWatchedMovie,removeWatchListMovie,moveToWatchList,removeWatchedMovie} from '../features/AddMovies/MovieSlice'

const MovieControls = ({ movie,type,display }) =>{

    const ControlButton = styled(Button)(({ _ }) => ({
        color:"#fefefe",
        backgroundColor:"transparent",
        border:"none",
        transition:"all 0.3s ease",
        fontSize: "1.25rem",
        padding:"5px",
        margin:"0",
        minWidth:"0 !important",
    }));

    const dispatch = useDispatch()
    return(        
        <div className={`${display} notdisplayed`}>
            {
                type === "watchList" &&(
                    <Stack direction="row">
                        <ControlButton onClick={ () => dispatch(addWatchedMovie(movie)) }>
                            <i className="fa-fw far fa-eye"></i>
                        </ControlButton>
                        <ControlButton onClick={ () => dispatch(removeWatchListMovie(movie.id)) }>
                            <i className="fa-fw fa fa-times"></i>
                        </ControlButton>
                    </Stack>
                )
            }
            {
                type === "watched" &&(
                    <Stack direction="row">
                        <ControlButton onClick={ () => dispatch(moveToWatchList(movie)) }>
                            <i className="fa-fw far fa-eye-slash"></i>
                        </ControlButton>
                        <ControlButton onClick={ () => dispatch(removeWatchedMovie(movie.id)) }>
                            <i className="fa-fw fa fa-times"></i>
                        </ControlButton>
                    </Stack>
                )
            }
        </div>
    )
}

export default MovieControls