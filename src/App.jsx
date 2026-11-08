import {Route, Routes, NavLink} from 'react-router-dom'
import './App.css'
import Home from "./components/pages/Home/Home"
import Movies from "./components/pages/Movies/Movies"
import MovieDetails from './components/pages/MovieDetails/MovieDetails'
function App() {


  return (
    <>
    <nav>
      <NavLink to="/">Home</NavLink>{" / "}
      <NavLink to="/movies">Movies</NavLink>
    </nav>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}/>
     </Routes>
    </>
  )
}

export default App
