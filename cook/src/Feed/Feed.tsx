import React from 'react'
import Post from '../Post/Post'

type PostData = {
  title: string;
};

type FeedProps = {
  posts: PostData[];
};

const Feed: React.FC<FeedProps>= ({ posts }) => {
  return (
    <div className="flex flex-col">
      <div>Feed</div>
      <div>
        {posts.map((post: PostData) => (
          <Post title={post.title} />
        ))}
      </div>
    </div>
  )
}

export default Feed