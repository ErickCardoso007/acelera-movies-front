import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { Movie } from './pages/movie/movie'
import { CreateMovie } from './pages/createMovie/createMovie'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/movie/:id" element={<Movie />} exact />
        <Route path="/" element={<CreateMovie />} exact />
      </Routes>
    </BrowserRouter>

  )
}
