import React from 'react'

type PostProps = {
    title: string;
}

const Post: React.FC<PostProps> = ({ title }) => {
    return (
        <div>{ title }</div>
    )
}

export default Post