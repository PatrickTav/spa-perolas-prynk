import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {About, Home, Services, Contact} from './pages'
import {Header, Footer} from './components'


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
