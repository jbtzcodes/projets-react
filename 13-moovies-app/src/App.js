import {useState, useEffect} from 'react';
import './App.css';
import searchIcon from './searchIcon.svg';
// bf186340
import FilmCard from './filmCard';


const API_URL = 'http://www.omdbapi.com?apikey=bf186340';

// const film1 = {
//   "title" : "Amazing Spiderman Syndrome",
//   "Year" : "2012",
//   "imdbID": "tt2586634",
//   "Type": "movie",
//   "Poster": "N/A"
// }



const App = () => {

  const [films, setFilms ] = useState([]);
  const [searchFilm, setSearchFilm ] = useState([]);

  const rechercheFilms = async (titre) => {
    const response = await fetch(`${API_URL}&s=${titre}`)
    const data = await response.json();

    // console.log(data.Search);

    setFilms(data.Search);
  }

useEffect(()=> {
rechercheFilms('spiderman')
}, []);

return (
<div className="app">

  <h1>MOOVIES</h1>

  <div className="search">
    <input 
    type="text" 
    placeholder="Rechercher votre film" value={searchFilm}
    onChange={(e)=> setSearchFilm(e.target.value)} />
    <img 
    src={searchIcon} 
    alt="Search" 
    onClick={()=>rechercheFilms(searchFilm)}/>
  </div>

  {
    films ?.length > 0 ? (
  <div className="container">
{films.map((film) => (
  <FilmCard film={film}/>
))}
  </div>
    ) : (
      <div className="empty">
        <h2>Nous avons pas ce film</h2>
      </div>
    )
  }


</div>
)
}


export default App;
