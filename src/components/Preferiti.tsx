import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

type Movie = {
    id: string;
    title: string;
    year: string;
    posterUrl: string
}

function Preferiti() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const prefers = localStorage.getItem('prefers')
        if(prefers) {
            try {
                const parsed: Movie[] = JSON.parse(prefers)
                setMovies(parsed)
            } catch (error) {
                console.error('Errore nel parsing dei preferiti', error)
                setMovies([])
            }
        }
    }, [])

    if(!movies.length) return <p>Nessun film nei preferiti!</p>

    return(
        <div className="movie-grid">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default Preferiti 