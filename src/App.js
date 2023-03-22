import './App.css';
import {useState} from 'react'
import axios from 'axios'
import Movie from './components/Movie'

function App() {

  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({})
  const [bool, setBool] = useState(false)

  const getMovie = () => {

    if(search != ""){
      setBool(true)
      axios.get(`https://www.omdbapi.com/?t=${search}&apikey=caada9e`)
        .then(res => setMovie(res.data))
        .catch(err => console.log(err))
    }
    else{

      setMovie({})
    }
    
  }

  return (
    <div>
      <header className='movie-header'>
        <h1>OMDB API Filmek Keresése 🤑</h1>
        <input type="text" placeholder="Titanic..." onChange={(e) => {

          setSearch(e.target.value)

        }} />
        <button onClick={getMovie}>Keresés</button>
      </header>

      <div className='movie-container'>
        {
          bool && <Movie poster={movie.Poster} title={movie.Title} year={movie.Year} actors={movie.Actors} genre={movie.Genre} imdb={movie.imdbRating} metascore={movie.Metascore} plot={movie.Plot} />
        }
          
      </div>
    </div>
  );
}

export default App;
