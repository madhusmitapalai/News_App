import React from 'react'
import '../index.css'
const SearchBar = ({handleSubmit,query,isLoading,setQuery}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={query}
                    placeholder='search news'
                    name='query'
                    className='search-bar'
                    onChange={(event) => setQuery(event.target.value)}
                />
                <input
                disabled={isLoading || !query}
                type="submit"
                className="btns"
                value="Search"
            />
            </form>
        </div>
    )
}

export default SearchBar
