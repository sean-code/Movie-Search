import React, {useState} from "react";
import './Search.css';

import MovieList from "./MovieList";

function Search(){
    const[movies, setMovies] = useState([

        {
            "Title": "Dune",
            "Year": "2021",
            "imdbID": "tt1160419",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Eternals",
            "Year": "2021",
            "imdbID": "tt9032400",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2Y1ODBhYTItYmJiZi00NjU2LWI2NjktNTcwM2U2NGQ2ZTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Batman",
            "Year": "2022",
            "imdbID": "tt1877830",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
        },
        {
            "Title": "Bullet Train",
            "Year": "2022",
            "imdbID": "tt12593682",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Woman King",
            "Year": "2022",
            "imdbID": "tt8093700",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2I4MDIwYWUtOWMxNC00ZTIzLWE3OGYtOWUyMmIwZGE2NjU4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
        }
    ])
    return(
        <div className="container-fluid movie-app">
            <div className="row">
                <MovieList movies={movies}/>
            </div>
        </div>
    )
}

export default Search;