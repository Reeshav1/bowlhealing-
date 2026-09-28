
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import About from './pages/About'
import Collections from './pages/Collections'
import Blog from './pages/Blog'

const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route index element={<HomePage />} />
     <Route path='/about' element={<About/>}/>
     <Route path='/collections' element={<Collections/>}/>
     <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
