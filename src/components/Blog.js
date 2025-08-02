import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
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

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Fintech: Islamic Banking Meets Technology',
      preview: 'Islamic banking and financial technology are converging in exciting ways, creating new opportunities for Muslim professionals and businesses.',
      date: 'December 15, 2024',
      author: 'MCA Team',
      tags: ['Finance', 'Technology'],
      readTime: '5 min read',
      image: '/blog-images/fintech-islamic-banking.jpg'
    },
    {
      id: 2,
      title: 'Navigating Corporate Law: A Muslim Perspective',
      preview: 'Understanding corporate law from an Islamic perspective can help Muslim professionals navigate complex legal environments.',
      date: 'December 8, 2024',
      author: 'MCA Team',
      tags: ['Law', 'Career'],
      readTime: '7 min read',
      image: '/blog-images/corporate-law-muslim.jpg'
    },
    {
      id: 3,
      title: 'Computer Science Ethics: Building Technology with Islamic Values',
      preview: 'How Islamic ethics can guide the development of technology that benefits humanity.',
      date: 'December 1, 2024',
      author: 'MCA Team',
      tags: ['Computer Science', 'Ethics'],
      readTime: '6 min read',
      image: '/blog-images/cs-ethics-islamic.jpg'
    },
    {
      id: 4,
      title: 'Investment Banking: Understanding the Markets',
      preview: 'A comprehensive guide to understanding investment banking from an Islamic finance perspective.',
      date: 'November 24, 2024',
      author: 'MCA Team',
      tags: ['Finance', 'Investment'],
      readTime: '8 min read',
      image: '/blog-images/investment-banking-markets.jpg'
    },
    {
      id: 5,
      title: 'Consulting Careers: From Strategy to Implementation',
      preview: 'Exploring consulting careers and how Muslim professionals can excel in this field.',
      date: 'November 17, 2024',
      author: 'MCA Team',
      tags: ['Consulting', 'Career'],
      readTime: '4 min read',
      image: '/blog-images/consulting-careers.jpg'
    },
    {
      id: 6,
      title: 'Data Science in the Modern Economy',
      preview: 'How data science is transforming the modern economy and opportunities for Muslim professionals.',
      date: 'November 10, 2024',
      author: 'MCA Team',
      tags: ['Computer Science', 'Data'],
      readTime: '9 min read',
      image: '/blog-images/data-science-economy.jpg'
    }
  ];

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="hero-title animate-on-scroll">Weekly Commercial Awareness Blog</h1>
          <p className="hero-subtitle animate-on-scroll">
            Free, digestible content designed to help prepare for internship interviews and build commercial awareness
          </p>
          <div className="blog-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Articles Published</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Students Helped</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Industries Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="blog-list">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link">
                <article className="blog-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="blog-card-header">
                    <div className="blog-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
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
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 