function MovieCard({ movie }) {
     
    // Aggiunge film ai preferiti salvando in LocalStorage
    const addToPrefers = () => {
        const prefers = JSON.parse(localStorage.getItem('prefers')) || []
        prefers.push(movie)
        localStorage.setItem('prefers', JSON.stringify(prefers))
        alert(`${movie.title} aggiunto ai preferiti!`)
    }
    
    return(
        <div>
            <img src={movie.posterUrl || "https://via.placeholder.com/210x295?text=No+Image"} alt={`Poster del film {movie.title}`} /> 
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <button onClick={addToPrefers} aria-label={`Aggiungi ${movie.title} ai preferiti`}>Aggiungi ai preferiti</button>
        </div>
    )
}


export default MovieCard 