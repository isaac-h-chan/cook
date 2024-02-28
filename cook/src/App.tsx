import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import Feed from './Feed/Feed'
import RightSideBar from './RightSideBar/RightSideBar'

const App = () => {
  const posts = Array();
  for (let i = 0; i < 10; i++) {
    posts.push({title: "post " + (i + 1)});
  }
  console.log(posts);
  return (
    <>
      <Navbar />
      <div className="flex justify-between">
        <LeftSideBar />
        <Feed posts={posts}/>
        <RightSideBar />
      </div>
    </>
  )
}

export default App;