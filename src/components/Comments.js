import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {

    const rendererComments = comments.map(comment => {
        return <Comment /> 
    });

    return (
        <div>
            
        </div>
    )
}

export default Comments;