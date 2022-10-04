import React, {useState} from "react";
import MovieList from "./MovieList";

function Search(){
    const[movies, setMovies] = useState([
        {
            "Title": "Warrior",
            "Year": "2011",
            "imdbID": "tt1291584",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg"
        },
        {
            "Title": "The Road Warrior",
            "Year": "1981",
            "imdbID": "tt0082694",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2VlNjNhZWQtMTY2OC00Y2E1LWJkNGUtMDU4M2ViNzliMGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Ong-Bak: The Thai Warrior",
            "Year": "2003",
            "imdbID": "tt0368909",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDg4MmQyODgtM2Q4ZC00ZWI2LWJkYmMtYTQ5ZGI5NDJhN2IwXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Xena: Warrior Princess",
            "Year": "1995–2001",
            "imdbID": "tt0112230",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Tanhaji: The Unsung Warrior",
            "Year": "2020",
            "imdbID": "tt8108274",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDc5ZmQ3MzUtYTY4OS00YTE3LTkwNmItNmQ2ODIwNWM3MzY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Warrior Nun",
            "Year": "2020–",
            "imdbID": "tt9059350",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDg4NTQ2ZDgtMzI5Zi00Mzc1LTk0ZWQtZTI5ODhkNWY5NzdlXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg"
        },
        {
            "Title": "Peaceful Warrior",
            "Year": "2006",
            "imdbID": "tt0438315",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxMDkyMTIwN15BMl5BanBnXkFtZTcwNjQ3MTkzMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Warrior",
            "Year": "2019–",
            "imdbID": "tt5743796",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmQwZWYzNWEtYTMyYy00YzBjLTlkNmQtMmI4ZTdhNDRmZDFkXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
        },
        {
            "Title": "The Princess and the Warrior",
            "Year": "2000",
            "imdbID": "tt0203632",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTBhNmNlYTUtMTk4Ni00ZmM2LTkyMDctMjU3YzJmN2VjMDRmXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
        }
    ])
    return(
        <div>
            <MovieList movies={movies}/>
        </div>
    )
}

export default Search;