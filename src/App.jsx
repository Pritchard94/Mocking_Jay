import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Artistes from './pages/Artistes'
import Home from "./pages/Home"
import Music from './pages/Music'
import Videos from './pages/Videos'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artistes' element={<Artistes />} />
        <Route path='/music' element={<Music />} />
        <Route path='/videos' element={<Videos/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
