import React,{ useState } from 'react'
import { Card,CardMedia } from '@mui/material'
import MovieControls from './MovieControls'

const MovieCard = ({movie,type}) =>{
    const [ display,setDisplay] = useState("notdisplayed")
    const showIcon = (e) =>{
        e.preventDefault()
        setDisplay("displayed")
    }
    const hideIcon = (e) =>{
        e.preventDefault()
        setDisplay("notdisplayed")
    }

    return(
        <div className="movie-card">
            <div onMouseEnter={ (e) => showIcon(e)} onMouseLeave={ (e) => hideIcon(e) }>
                <Card sx={{ display:"flex", m:1 }}>
                {
                    movie.poster_path ?
                    <CardMedia component="img" sx={{ width:250 }} image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/> : <CardMedia component="img" sx={{ width:220 }} image={`https://via.placeholder.com/800`}/>
                }
                <MovieControls type={type} movie={movie} display={display}/>
            </Card>
            </div>
        </div>
    )
}

export default MovieCard