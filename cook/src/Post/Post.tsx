import React from 'react'

type PostProps = {
    title: string;
}

const Post: React.FC<PostProps> = ({ title }) => {
    return (
        <div className='w-[35rem] h-[35rem] border border-red-900'>
            { title }
        </div>
    )
}

export default Post