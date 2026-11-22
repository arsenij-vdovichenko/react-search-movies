import axios from "axios"
const API_KEY = "c7b125c16e73e2a335774c4245953079"

export async function getTrendiesMovies(){
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",{
        params: {
            api_key:API_KEY,
        }
    })
    return response.data.results
}


export async function getMovieDetailes(movieID){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,{
        params: {
            api_key:API_KEY,
        }
    })
    return response.data
}

export async function getMovieCredits(movieID){
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits`,{
        params: {
            api_key:API_KEY,
        }
    })
    return responce.data.cast
}

export async function getMovieReviews(movieID){
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews`,{
    params: {
      api_key: API_KEY,
    }
  })
  return response.data.results
}


export async function searchMovies(query) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );

  return response.data.results;
}