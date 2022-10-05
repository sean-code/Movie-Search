import React, {useState, useEffect} from "react";
import './Search.css';
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";


function Search(){
    const[movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');

    const getMovieRequest = async() =>{
        const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=6f97e522`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
        
    }
    useEffect(()=> {
        getMovieRequest();
    }, [searchMovie]);

    return(
        <div className="container-fluid movie-app">
            <div className="row">
                <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
            </div>
            <div className="row">
                <MovieListHeading heading='Search Result'/>
            </div>
            <div className="row">
                <MovieList movies={movies}/>
            </div>
        </div>
    )
}

export default Search;