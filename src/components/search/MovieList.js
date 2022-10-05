import React from "react";
import './Search.css'

const MovieList = (props) =>{
    return(
        <>
            {props.movies.map((movie, index)=> 
            <div className="image-container">
                <img src={movie.Poster} alt='img' />
                <div className="overlay"></div>
            </div>)}
        </>
    )
}


export default MovieList;