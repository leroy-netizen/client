import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import ViewPosts from './pages/ViewPosts/ViewPosts'
import Home from './pages/Home/Home';
import Post from './pages/ViewPosts/post/post';
import CreatePost from './pages/CreatePost/CreatePost';
function App() {
  return (
    <div className="App">
     <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/viewposts" element={ <ViewPosts />} />
        <Route path="/createpost" element={ <CreatePost />} />
        <Route path="/posts/:id" element={ <Post />} />
      </Routes>
    </div>
  );
}

export default App;
