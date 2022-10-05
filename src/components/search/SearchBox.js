import React from 'react';
import './Search.css'

const SearchBox = (props) =>{
    return(
        <div className="search-box">
            <form className="searchbox">
                <input type="search" 
                    value={props.value}
                    onChange={(event)=> props.setSearchMovie(event.target.value)}
                    placeholder="Type in your search..."                         
                />
            </form>
        </div>
    )
}

export default SearchBox;