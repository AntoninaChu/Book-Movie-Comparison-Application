import React from 'react';
import './grades.css';

function Grades(props){
    return (
        <div className="grades">
            <p className="inscription">Book Votes:</p>
            <p className="scale">{props.votes1}</p>
            <p className="inscription">Movie Votes:</p>
            <p className="scale">{props.votes2}</p>
        </div>
    )
}

export default Grades