import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailService from '../services/emailService';
import { blogPosts } from '../data/addBlogs';
import './Blog.css';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(['all']);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Use the email service to handle subscription
      const result = await emailService.subscribe(email);
      
      setEmail('');
      
      console.log('Subscription successful:', result);
      alert('Thank you for subscribing! You\'ll receive our weekly updates.');
      
    } catch (error) {
      alert(error.message || 'There was an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Category definitions
  const categories = [
    {
      id: 'commercial-awareness',
      name: 'Commercial Awareness',
      description: 'Understand how current events and global decisions impact the world of work. These posts explain big trends, policies, and business shifts — and how they connect to your future career.'
    },
    {
      id: 'islamic-values',
      name: 'Islamic Values',
      description: 'Explore how Islamic principles shape the way we learn, work, and grow. These posts reflect on concepts like sabr, tawakkul, modesty, and gratitude — grounding your journey in purpose and faith.'
    },
    {
      id: 'student-life',
      name: 'Student Life',
      description: 'Navigate the ups and downs of college and university life with practical advice on studying, time management, wellness, and more — helping you make the most of your student years, inside and outside the lecture hall.'
    },
    {
      id: 'application-support',
      name: 'Application Support',
      description: 'From personal statements to interview prep, these blogs guide you through the full application process — so you can move forward with clarity, confidence, and a solid plan.'
    }
  ];


  // Filtering functions
  const toggleCategory = (categoryId) => {
    if (categoryId === 'all') {
      setSelectedCategories(['all']);
      return;
    }
    
    // If clicking the same category, deselect it and go back to 'all'
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(['all']);
    } else {
      // Select only this category
      setSelectedCategories([categoryId]);
    }
  };

  // Filter blog posts based on selected category
  const filteredBlogPosts = blogPosts.filter(post => {
    // If 'all' is selected, show all posts
    if (selectedCategories.includes('all')) {
      return true;
    }

    // Get the selected category
    const selectedCategory = categories.find(cat => cat.id === selectedCategories[0]);
    if (!selectedCategory) return false;

    // Show posts that have this category (even if they have other categories too)
    return post.categories.includes(selectedCategory.name);
  });

  console.log('Debug - selectedCategories:', selectedCategories);
  console.log('Debug - filteredBlogPosts length:', filteredBlogPosts.length);
  console.log('Debug - filteredBlogPosts:', filteredBlogPosts.map(p => ({ id: p.id, title: p.title })));

  // Animation effect - runs after filteredBlogPosts is defined
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Use setTimeout to ensure DOM has updated
    const timeoutId = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      console.log('Debug - Found animated elements:', animatedElements.length);
      animatedElements.forEach(el => {
        // Remove any existing animate-in class first
        el.classList.remove('animate-in');
        observer.observe(el);
        console.log('Debug - Observing element:', el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredBlogPosts]); // Add filteredBlogPosts as dependency

  return (
    <div className="blog">
      {/* Hero Section */}
      <section 
        className="blog-hero"
        style={{
          backgroundImage: `url('/blogbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-overlay">
          <div className="container">
            <h1 className="hero-title animate-on-scroll">Real-World Insight. Faith-Driven Perspective.</h1>
            <p className="hero-subtitle animate-on-scroll">
            Explore commercial awareness, Islamic values, student life and applications - all in one space.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="blog-intro">
        <div className="container">
          <div className="intro-content animate-on-scroll">
            <p className="intro-text">
              The MCA blog is your space to explore the journey of being a Muslim student and a professional in today's world. From staying commercially aware to navigating student life, from integrating Islamic values to choosing the right career path - we're here to break things down in a way that's real, relevant, and rooted in purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="blog-main-content">
        <div className="container">
          <div className="blog-layout">
            {/* Filter Sidebar - Desktop */}
            <div className="blog-sidebar desktop-only">
              <h3 className="filters-title">Filter by Category</h3>
              <div className="category-buttons">
                <button 
                  className={`category-toggle ${selectedCategories.includes('all') ? 'active' : ''}`}
                  onClick={() => toggleCategory('all')}
                >
                  All
                </button>
                {categories.map(category => (
                  <button 
                    key={category.id}
                    className={`category-toggle ${selectedCategories.includes(category.id) ? 'active' : ''}`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filter Section */}
            <div className="mobile-filter-section mobile-only">
              <h3 className="filters-title">Filter by Category</h3>
              <div className="category-buttons-horizontal">
                <button 
                  className={`category-toggle ${selectedCategories.includes('all') ? 'active' : ''}`}
                  onClick={() => toggleCategory('all')}
                >
                  All
                </button>
                {categories.map(category => (
                  <button 
                    key={category.id}
                    className={`category-toggle ${selectedCategories.includes(category.id) ? 'active' : ''}`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              {filteredBlogPosts.length === 0 ? (
                <div className="no-blogs-message">
                  <h3>Coming Soon!</h3>
                  <p>We're working on adding more content for this category. Check back soon for new articles!</p>
                </div>
              ) : (
                <div className="blog-grid">
                  {filteredBlogPosts.map((post, index) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link">
                      <article className="blog-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="blog-card-header">
                          <div className="blog-tags">
                            {post.categories.map(category => (
                              <span key={category} className="blog-tag blog-main-tag">{category}</span>
                            ))}
                            {post.topics && post.topics.map(topic => (
                              <span key={topic} className="blog-tag blog-sub-tag">{topic}</span>
                            ))}
                          </div>
                          <div className="blog-meta">
                            <span className="blog-date">{post.date}</span>
                            <span className="blog-read-time">{post.readTime}</span>
                            <span className="blog-author">By {post.author}</span>
                          </div>
                        </div>
                        <div className="blog-card-image">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-preview">{post.preview}</p>
                        <div className="blog-card-footer">
                          <span className="read-more">Read More →</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content animate-on-scroll">
            <h2 className="section-title">Stay Updated</h2>
            <p className="newsletter-description">
              Get our latest articles delivered to your inbox every week. No spam, just valuable insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            <p style={{marginTop: '1.5rem', color: '#888', fontStyle: 'italic', fontSize: '0.9rem'}}>
              <small>Your email will be used solely for sending weekly blog updates. You can unsubscribe at any time.</small>
            </p>
            

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 