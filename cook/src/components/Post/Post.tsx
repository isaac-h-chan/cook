import React from 'react'

type PostProps = {
    title: string;
    body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
    return (
        <>
            <div className='w-[35rem] h-[35rem] border border-red-900 rounded-3xl p-5'>
                <h1 className='text-2xl'>{ title }</h1>
                <p>{ body }</p>
            </div>
        </>
    )
}

export default Post