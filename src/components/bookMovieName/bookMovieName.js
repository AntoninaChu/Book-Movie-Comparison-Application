import React from 'react';
import './bookMovieName.css';

function BookMovieName(props){
    return (
        <h2 className="book-movie-name">{props.name}</h2>
    )
}

export default BookMovieName