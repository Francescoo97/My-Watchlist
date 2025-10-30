import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function Preferiti() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const prefers = JSON.parse(localStorage.getItem('prefers')) || []
        setMovies(prefers)
    }, [])

    if(!movies.length) return <p>Nessun film nei preferiti!</p>

    return(
        <div className="movie-grid">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Preferiti 