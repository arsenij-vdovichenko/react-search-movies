import {Route, Routes, NavLink} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const Home = lazy(()=>import("./components/pages/Home/Home"))

const Movies= lazy(()=>import("./components/pages/Movies/Movies"))

const MovieDetails = lazy(()=>import("./components/pages/MovieDetails/MovieDetails"))
import Cast from './components/pages/Cast/Cast'
import Reviews from './components/pages/Reviews/Reviews'
function App() {


  return (
    <>
    <nav>
      <NavLink to="/">Home</NavLink>{" / "}
      <NavLink to="/movies">Movies</NavLink>
    </nav>
    
    <Suspense fallback={<p>loading</p>}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}>
        <Route path='cast' element={<Cast/>}/>
        <Route path='reviews' element={<Reviews/>}/>
      </Route>
     </Routes>
     </Suspense>
    </>
  )
}

export default App
