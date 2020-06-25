import React from 'react';
import './image.css'

function Image(props) {
    return (
        <img src={props.source} className="image"></img>
    )
}

export default Image;