import React,{ useState,useEffect } from 'react'
import { Paper,InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useGetMoviesMutation } from '../../services/MoviesApi'
import Movies from '../../components/Movies'

const AddMovies = () => {
    const [ getMovies, {data:movies} ] = useGetMoviesMutation();
    const [ query,setQuery ] = useState("")

    const handleChange = (e) =>{
        setQuery(e.target.value)
    }

    // console.log("data", movies)
    useEffect(() =>{
        if(query){
            const fetchMovies = async() =>{
                try{
                    await getMovies({query})
                }
                catch(error){
                    console.log(error)
                }
            }
            fetchMovies()
        }
    },[query,getMovies])

    return (
        <div style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"750px",
            alignContent:"center",
            marginTop:"50px",
        }}>
            <Paper component="form" sx={{
                p:" 2px 4px",
                display:"flex",
                alignItems:"center",
                width:720,
            }}>
                <InputBase 
                    sx={{ ml:1,flex:1 }} 
                    placeholder="Search for your movie here ..." 
                    value={query} 
                    onChange={handleChange} 
                />
                <IconButton type="submit" sx={{ p:"10px" }} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <div className="results">
                {
                    movies?.results?.length > 0 && (
                        movies?.results?.map((movie) => {
                            return(
                                <Movies key={movie.id} movie={movie}/>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default AddMovies
