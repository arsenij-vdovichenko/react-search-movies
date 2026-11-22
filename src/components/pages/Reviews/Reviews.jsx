// import Reviews from "./Reviews.module"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "../../../services/api"
function Reviews(){
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams()
    useEffect(()=>{
        async function fetchReviews(){
            const data = await getMovieReviews(movieId);
                 setReviews(data);
        }
        fetchReviews()
    }, [movieId])

    console.log(reviews);
    
return(<>
<h1>Reviews</h1>

    {reviews.length === 0 ? (<p>NO INFO</p>) : (<ul>{reviews.map((review)=>{
        return(<li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
        </li>)
    })}</ul>)}
</>)
}

export default Reviews