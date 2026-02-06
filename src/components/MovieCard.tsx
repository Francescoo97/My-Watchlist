import { useState, useEffect } from "react"

type Movie = {
    id: string;
    title: string;
    year: string;
    posterUrl: string
}

type MovieCardProps = {
    movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {

    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    useEffect(() => {
        const prefers: Movie[] = JSON.parse(localStorage.getItem('prefers') || '[]') 
        setIsFavorite(prefers.some(fav => fav.id === movie.id))
    },[movie.id])

    // Funzione per aggiungere o rimuovere film dai preferiti
    const toggleFavorite = () => {
        const prefers: Movie[] = JSON.parse(localStorage.getItem('prefers') || '[]') 

        if(isFavorite) {

            // Rimuovi film dai preferiti
            const updatedPrefers = prefers.filter(fav => fav.id !== movie.id)
            localStorage.setItem('prefers', JSON.stringify(updatedPrefers))
            setIsFavorite(false)
            alert(`${movie.title} rimosso dai preferiti!`)

        } else {
            // Aggiungi film ai preferiti
            const updatedPrefers = [...prefers, movie]
            localStorage.setItem('prefers', JSON.stringify(updatedPrefers))
            setIsFavorite(true)
            alert(`${movie.title} aggiunto ai preferiti!`)
        }
    }
    
    return(
        <div>
            <img src={movie.posterUrl || "https://via.placeholder.com/210x295?text=No+Image"} alt={`Poster del film ${movie.title}`} /> 
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <button 
               onClick={toggleFavorite}
               aria-label={isFavorite ? `Rimuovi ${movie.title} dai preferiti` : `Aggiungi ${movie.title} ai preferiti`}>

                {isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            </button>
        </div>
    )
}


export default MovieCard 