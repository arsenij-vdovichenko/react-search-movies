// import Movies from "./Movies.module"
import { useState } from "react"
import { searchMovies } from "../../../services/api"
import MovieList from "../../MovieList/MovieList"
function Movies() {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        const data = await searchMovies(query)
        setMovies(data)
    }

    return (
        <>
            <h1>Movies</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit">Search</button>
            </form>

            <MovieList movies={movies} />
        </>
    )
}

export default Movies