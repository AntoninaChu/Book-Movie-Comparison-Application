import React from'react';
import './votesButton.css';

function VotesButton(props) {
    return (
    <input type='button' className='votesButton' value={props.name}></input>
    )
}

export default VotesButton;