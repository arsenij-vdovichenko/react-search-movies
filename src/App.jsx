import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./components/pages/Home/Home"
import Movies from "./components/pages/Movies/Movies"
import MovieDetails from './components/pages/MovieDetails/MovieDetails'
function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}/>
     </Routes>
    </>
  )
}

export default App
