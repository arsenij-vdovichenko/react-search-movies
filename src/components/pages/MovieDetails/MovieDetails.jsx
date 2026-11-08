import { useEffect, useState,  } from "react"
import { useLocation, useParams, Link } from "react-router-dom"
import { getMovieDetailes } from "../../../services/api"
function MovieDetails(){
    const [movie, setMovie] = useState(null)
    const location = useLocation()
    const {movieId} = useParams()
    
    useEffect(()=>{
        async function fetchMovie(){
            const data = await getMovieDetailes(movieId)
            setMovie(data)
        }
        fetchMovie()
    },[movieId])


    console.log(movie);
    
    return(
        <>
        <Link to={location.state||"/"}>Go back</Link>
        <h1>{movie.title || movie.name}</h1>
        <p>user score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>{movie.genres?.map((genre)=>{
            return(
                <li key={genre.id}>{genre.name}</li>
            )
        })}</ul>
        </>
    )
}

export default MovieDetails