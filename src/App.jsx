import './App.css'
import './scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Styleguide from './styleguide/Styleguide'
import Home from './views/Home'

function App() {

  return (
    <>
      <header>
        <h1>Project Wakkos</h1>
        <Link to="/styleguide">styleguide enlace</Link>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/styleguide' element={<Styleguide />} />
        </Routes>
      </main>
    </>
  )
}

export default App
