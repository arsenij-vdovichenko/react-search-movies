import { useEffect, useState } from "react";
import { useLocation, useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getMovieDetailes } from "../../../services/api";
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetailes(movieId);
      setMovie(data);
    }
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>loading...</p>;
  }
  console.log(movie);

  return (
    <>
      <Link to={location.state || "/"}>Go back</Link>
      <div className="box">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : "/no-poster.jpg"
        }
        alt={movie.title}
      />
      <div>
      <h1>{movie.title || movie.name}</h1>
      <p>user score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul className="list">
        {movie.genres?.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
      </div>
      </div>
      <NavLink to='cast'>Cast</NavLink>
      <NavLink to='reviews'>Reviews</NavLink>
        
      <Outlet/>
    </>
  );
}

export default MovieDetails;
