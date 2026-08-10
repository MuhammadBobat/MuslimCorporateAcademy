import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Route-level code splitting: each page only downloads when a visitor
// actually navigates to it, instead of shipping every page in one bundle.
const Home = lazy(() => import("./components/Home"));
const Tuition = lazy(() => import("./components/Tuition"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const Mission = lazy(() => import("./components/Mission"));
const Mentors = lazy(() => import("./components/pages/Mentors"));
const Ethos = lazy(() => import("./components/pages/Ethos"));
const PersonalStatement = lazy(() => import("./components/pages/PersonalStatement"));
const CVSupport = lazy(() => import("./components/pages/CVSupport"));
const Socials = lazy(() => import("./components/pages/Socials"));
const GetInvolved = lazy(() => import("./components/pages/GetInvolved"));
const FAQ = lazy(() => import("./components/pages/FAQ"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
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
                <Route path="/faq" element={<FAQ />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
