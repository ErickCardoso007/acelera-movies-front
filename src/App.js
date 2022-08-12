import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Modal } from './components/modal/modal'
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { Movie } from './pages/movie/movie'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/modal' element={<Modal />} exact />
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/movie/:id" element={<Movie />} exact />
      </Routes>
    </BrowserRouter>
  )
}
