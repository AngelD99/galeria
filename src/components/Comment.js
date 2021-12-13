import React from 'react';
import './Comment.css';

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <p>{comment}</p>
        </div>
    )
}

export default Comment
