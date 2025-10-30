import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"


function MovieList({ searchTerm }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!searchTerm) {
            setMovies([])
            return
        }

        setLoading(true)

        // Chiave API OMDb
        const API = 'e2b7199f' 

        const url = `https://www.omdbapi.com/?apikey=${API}&s=${encodeURIComponent(searchTerm)}`;

        // Chiamata API per cercare i film
        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Errore nella risposta' + res.status)
            }
            return res.json()
        })
        .then((data) => {
            if(data.Response === 'False' || !data.Search) {
                setMovies([])
                return
            }

            // filtro per iniziali
            const filteredMovies = data.Search.filter((item => 
            item.Title.toLowerCase().startsWith(searchTerm.toLowerCase()))
            )

            const movieData = filteredMovies.map((item => ({
                id: item.imdbID,
                title: item.Title,
                year: item.Year,
                posterUrl: item.Poster !== 'N/A' ? item.Poster : "https://via.placeholder.com/210x295?text=No+Image",
            })))

            setMovies(movieData)
        })
        .catch((err) => console.log('Error', err))
        .finally(() => setLoading(false))

    }, [searchTerm])

    if(loading) return <p>Caricamento...</p>
    if(!movies.length) return <p>Nessun film trovato!</p>

    return (
        <div className="movie-grid">
            {loading && <p className="load-message">Caricamento...</p>}
            {!loading && movies.length === 0 && <p className="load-message">Nessun film trovato!</p>}
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )

}

export default MovieList 