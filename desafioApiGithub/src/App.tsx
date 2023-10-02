import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPerfil from './routes/SearchPerfil'
import HomeContent from './components/HomeContent'
import Home from './routes/Home'
import GithubPerfil from './routes/PerfilGitHub'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}>
          <Route index element={<Navigate to={"/home"}></Navigate>}></Route>
          <Route path='/home' element={<HomeContent/>}></Route>
          <Route path='/search-perfil' element={<SearchPerfil/>}>
            <Route path=':username' element={<GithubPerfil></GithubPerfil>}></Route>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
