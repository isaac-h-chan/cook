import React from 'react'
import Post from '../Post/Post'

type PostData = {
  title: string;
};

type FeedProps = {
  posts: PostData[];
  className: string;
};

const Feed: React.FC<FeedProps>= ({ posts, className }) => {
  return (
    <div className={className}>
      <h3>Feed</h3>
      <div className={className}>
        {posts.map((post: PostData) => (
          <Post title={post.title} />
        ))}
      </div>
    </div>
  )
}

export default Feed