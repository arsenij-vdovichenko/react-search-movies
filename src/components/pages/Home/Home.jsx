import { useState, useEffect, } from "react"
import { getTrendiesMovies } from "../../../services/api"
function Home(){
    const  [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
            const data = await getTrendiesMovies()
            setMovies(data)
        }
        fetchMovies()
    }, [])

    console.log(movies);
    
    return(
        <>
        <h1>Home</h1>
        <ul>
            {movies.map((movie)=>{
                return(
                    <li key={movie.id}>{movie.title}</li>
                )
            })}
        </ul>
        </>
    )
}

export default Home