import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Tuition from './components/Tuition';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Mission from './components/Mission';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
