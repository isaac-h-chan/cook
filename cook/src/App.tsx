import './index.css'
import Navbar from './components/Navbar/Navbar'
import Feed from './components/Feed/Feed'

const App = () => {
  const posts = Array();
  for (let i = 0; i < 100; i++) {
    posts.push({title: "post " + (i + 1), body: "lorem ipsum dolor iset"});
  }
  console.log(posts);
  return (
    <>
      <div className='flex flex-row h-full'>
        <div className='w-1/5'>
          <Navbar className="fixed border-r border-red-950 h-full w-1/5"/>
        </div>
        <Feed className='flex flex-col m-auto gap-10' posts={posts}/>
      </div>
    </>
  )
}

export default App;