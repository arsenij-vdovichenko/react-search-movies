// import Cast from "./Cast.nodule"
import { getMovieCredits } from "../../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Cast(){
    const [cast, setCast] = useState([])
    const {movieId} = useParams()
    useEffect(()=>{
       async function fetchCast(){
        const data = await getMovieCredits(movieId)
        setCast(data)
       }
       fetchCast()
    },[movieId])
    
    
    return(
        <>
        <h1>Cast</h1>
        <ul>
            {cast.map((actor)=>{
                return (
                    <li key={actor.id}>
                        <img src={actor.profile_path
            ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
            : "/no-poster.jpg"} alt="{actor.name}" />
                        <h2>{actor.name}</h2>
                        <p>{actor.character}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Cast