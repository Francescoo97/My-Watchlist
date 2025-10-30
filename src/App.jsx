import { useState } from "react"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import MovieList from "./components/MovieList"
import Preferiti from "./components/Preferiti"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './components/styles.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  return(

  <Router>
    <header>
      <div className="header-container">
      <h1>My Watchlist</h1>
      <Navbar /> 
      <Searchbar onSearch={setSearchTerm} /> 
      </div>
    </header>
    
    <main>
      <Routes>
        <Route path='/' element={<MovieList searchTerm={searchTerm} />} />
        <Route path='/preferiti' element={<Preferiti />} />
      </Routes>
    </main>

      <footer>
      <p>© 2025 - My Watchlist. Made with ❤️</p>
      <p>Dati da <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb</a></p>
      </footer>

  </Router>

  )
}

export default App 