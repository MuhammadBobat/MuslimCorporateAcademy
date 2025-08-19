import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addComment, getComments } from '../services/commentService';

import './BlogPost.css';

// Sample blog content - you can easily replace this with real content
const blogContent = {
  1: {
    id: 1,
    title: 'The Future of Fintech: Islamic Banking Meets Technology',
    author: 'MCA Team',
    date: 'December 15, 2024',
    readTime: '5 min read',
    tags: ['Finance', 'Technology'],
    image: '/blog-images/fintech-islamic-banking.jpg', // You'll add this image
    content: `
      <p>This is where your blog content will go. You can write full articles here with proper formatting.</p>
      
      <h2>Introduction</h2>
      <p>Islamic banking and financial technology are converging in exciting ways, creating new opportunities for Muslim professionals and businesses.</p>
      
      <h2>Key Trends</h2>
      <ul>
        <li>Digital Islamic banking platforms</li>
        <li>Blockchain in Islamic finance</li>
        <li>AI-powered Shariah compliance</li>
      </ul>
      
      <h2>Career Opportunities</h2>
      <p>For Muslim students interested in finance and technology, this convergence offers unique career paths that align with Islamic values.</p>
      
      <h2>Conclusion</h2>
      <p>The future of Islamic fintech is bright, and Muslim professionals are well-positioned to lead this transformation.</p>
    `
  },
  2: {
    id: 2,
    title: 'Navigating Corporate Law: A Muslim Perspective',
    author: 'MCA Team',
    date: 'December 8, 2024',
    readTime: '7 min read',
    tags: ['Law', 'Career'],
    image: '/blog-images/corporate-law-muslim.jpg',
    content: `
      <p>Understanding corporate law from an Islamic perspective can help Muslim professionals navigate complex legal environments.</p>
      
      <h2>Islamic Principles in Corporate Law</h2>
      <p>How Islamic values of justice, transparency, and ethical conduct align with modern corporate legal frameworks.</p>
      
      <h2>Career Paths in Corporate Law</h2>
      <p>Exploring opportunities for Muslim lawyers in corporate environments and how to maintain Islamic values.</p>
    `
  },
  3: {
    id: 3,
    title: 'Computer Science Ethics: Building Technology with Islamic Values',
    author: 'MCA Team',
    date: 'December 1, 2024',
    readTime: '6 min read',
    tags: ['Computer Science', 'Ethics'],
    image: '/blog-images/cs-ethics-islamic.jpg',
    content: `
      <p>How Islamic ethics can guide the development of technology that benefits humanity.</p>
      
      <h2>Ethical AI Development</h2>
      <p>Applying Islamic principles to artificial intelligence and machine learning.</p>
      
      <h2>Privacy and Data Protection</h2>
      <p>Islamic perspectives on data privacy and user protection in technology.</p>
    `
  },
  4: {
    id: 4,
    title: 'Investment Banking: Understanding the Markets',
    author: 'MCA Team',
    date: 'November 24, 2024',
    readTime: '8 min read',
    tags: ['Finance', 'Investment'],
    image: '/blog-images/investment-banking-markets.jpg',
    content: `
      <p>A comprehensive guide to understanding investment banking from an Islamic finance perspective.</p>
      
      <h2>Islamic Investment Principles</h2>
      <p>How to apply Islamic investment principles in modern banking environments.</p>
      
      <h2>Market Analysis</h2>
      <p>Understanding market dynamics while maintaining ethical investment practices.</p>
    `
  },
  5: {
    id: 5,
    title: 'Consulting Careers: From Strategy to Implementation',
    author: 'MCA Team',
    date: 'November 17, 2024',
    readTime: '4 min read',
    tags: ['Consulting', 'Career'],
    image: '/blog-images/consulting-careers.jpg',
    content: `
      <p>Exploring consulting careers and how Muslim professionals can excel in this field.</p>
      
      <h2>Strategy Consulting</h2>
      <p>How to approach strategic problems with Islamic values of wisdom and consultation.</p>
      
      <h2>Implementation Excellence</h2>
      <p>Delivering results while maintaining ethical standards and Islamic principles.</p>
    `
  },
  6: {
    id: 6,
    title: 'Data Science in the Modern Economy',
    author: 'MCA Team',
    date: 'November 10, 2024',
    readTime: '9 min read',
    tags: ['Computer Science', 'Data'],
    image: '/blog-images/data-science-economy.jpg',
    content: `
      <p>How data science is transforming the modern economy and opportunities for Muslim professionals.</p>
      
      <h2>Data Ethics</h2>
      <p>Applying Islamic ethics to data collection, analysis, and usage.</p>
      
      <h2>Career Opportunities</h2>
      <p>Exploring data science roles that align with Islamic values and principles.</p>
    `
  }
};



const BlogPost = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const post = blogContent[id];

  useEffect(() => {
    // Load comments from Firebase
    const loadComments = async () => {
      try {
        const fetchedComments = await getComments(id);
        setComments(fetchedComments);
      } catch (error) {
        // Fallback to empty array if there's an error
        setComments([]);
      }
    };
    
    loadComments();
    

  }, [id, post]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!commentAuthor.trim() || !newComment.trim()) {
      alert('Please fill in both name and comment fields.');
      return;
    }

    if (newComment.length < 10) {
      alert('Please write a more thoughtful comment (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      // Add comment to Firebase
      const newCommentObj = await addComment(id, commentAuthor.trim(), newComment.trim());
      
      // Add to local state
      const updatedComments = [newCommentObj, ...comments];
      setComments(updatedComments);
      
      // Clear form
      setNewComment('');
      setCommentAuthor('');
      
      // Show success message
      alert('Comment posted successfully!');
      
    } catch (error) {
      console.error('Error posting comment:', error);
      alert(`Error posting comment: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      {/* Hero Section */}
      <section className="blog-post-hero">
        <div className="container">
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-post-tag">{tag}</span>
                ))}
              </div>
              <div className="blog-post-info">
                <span className="blog-post-date">{post.date}</span>
                <span className="blog-post-read-time">{post.readTime}</span>
                <span className="blog-post-author">By {post.author}</span>
              </div>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-post-content">
        <div className="container">
          <div className="blog-post-body">
            {/* Featured Image */}
            <div className="blog-post-image">
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Blog Content */}
            <div 
              className="blog-post-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="blog-post-comments">
        <div className="container">
          <h2 className="comments-title">Leave a Comment</h2>
          <p className="comments-subtitle">
            Share your thoughtful insights and feedback on this article.
          </p>
          
          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="comment-form">
            <div className="comment-form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="comment-input comment-name"
                required
              />
            </div>
            <div className="comment-form-row">
              <textarea
                placeholder="Share your thoughts and insights..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-input comment-text"
                rows="4"
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary comment-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            <h3 className="comments-count">
              {comments.length} Comment{comments.length !== 1 ? 's' : ''}
            </h3>
            {comments.length === 0 ? (
              <p className="no-comments">Be the first to share your thoughts!</p>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <div className="comment-content">{comment.content}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="blog-post-footer">
        <div className="container">
          <Link to="/blog" className="back-to-blog">
            ← Back to All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 