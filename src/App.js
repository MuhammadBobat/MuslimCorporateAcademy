import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Tuition from "./components/Tuition";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// New page imports
import Mentors from "./components/pages/Mentors";
import Ethos from "./components/pages/Ethos";
import PersonalStatement from "./components/pages/PersonalStatement";
import CVSupport from "./components/pages/CVSupport";
import Socials from "./components/pages/Socials";
import GetInvolved from "./components/pages/GetInvolved";
import Enquire from "./components/pages/Enquire";
import FAQ from "./components/pages/FAQ";

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
            
            {/* New routes */}
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/ethos" element={<Ethos />} />
            <Route path="/personal-statement" element={<PersonalStatement />} />
            <Route path="/cv-support" element={<CVSupport />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
