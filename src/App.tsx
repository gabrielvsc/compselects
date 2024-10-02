import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Publications from './pages/Publications.tsx';
import Authors from './pages/Authors.tsx';
import Submissions from './pages/Submissions.tsx';
import Events from './pages/Events.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Publications />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
