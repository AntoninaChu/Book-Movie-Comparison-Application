import React from 'react';
import './descriptionContent.css';

function DescriptionContent(props) {
    return (
        <p className='description-content'>{props.content}</p>
    )
}

export default DescriptionContent;