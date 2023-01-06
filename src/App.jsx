import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from '../src/search.svg';
import './App.css';

function App() {

  const API_URL = 'https://www.omdbapi.com?apikey=bfefc516'
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    SearchMovies('Batman')
  }, [])
  

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <header className="search">
        <input
          type="text"
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}

        />
        <img src={SearchIcon} alt="search" onClick={() => SearchMovies(searchTerm)} />
      </header>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => {
            return <MovieCard movie={movie} />
          })}
        </div>
      )
        :
        (
          <div className='empty'>
            no movies found
          </div>
        )
      }

    </div>
  );
}

export default App;
