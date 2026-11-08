import { useState, useEffect, } from "react"
import { getTrendiesMovies } from "../../../services/api"
import MovieList from "../../MovieList/MovieList"
function Home(){
    const  [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
            const data = await getTrendiesMovies()
            setMovies(data)
        }
        fetchMovies()
    }, [])

    
    return(
        <>
        <h1>Trending Today</h1>
       
       <MovieList movies={movies} />
        </>
    )
}

export default Home