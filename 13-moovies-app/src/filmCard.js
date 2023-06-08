import React from 'react';

const FilmCard = ({ film })=> {
    return (
        <div className="film">
        <p className="film-date">{film.Year}</p>
        <img className="film-img" src={film.Poster !== 'N/A' ? film.Poster  : 'https://via.placeholder.com/400' } alt={film.Title}/>
            <div className="filter"></div>
       <div className="film-infos">
       <span>{film.Type}</span>
        <h3>{film.Title}</h3>
       </div>
    </div>
    )
}

export  default FilmCard;