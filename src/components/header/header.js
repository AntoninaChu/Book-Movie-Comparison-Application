import React from 'react';
import './header.css';
import BookMovieName from '../bookMovieName';

function Header(props){
    return (
        <div>
            <h1 className="header">Movie/Book Comparison</h1>
            <BookMovieName name={props.name} />
        </div>
    );
}

export default Header;