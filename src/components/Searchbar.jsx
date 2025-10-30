import { useEffect, useState } from "react";

function Searchbar({ onSearch }) {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const delay = setTimeout(() => {
            onSearch(inputValue.trim())
        }, 500)

        return () => clearTimeout(delay)
    }, [inputValue, onSearch])
    

    return (
        
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="movie-search" className="visually-hidden">Cerca un film</label>
            <input type="text"
            placeholder="Cerca un film..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
             />
             <button type="submit">Cerca</button>
        </form>
    )
}

export default Searchbar 