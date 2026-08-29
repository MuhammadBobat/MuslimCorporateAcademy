import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { addComment, getComments } from '../services/commentService';
import RouteLoader from './RouteLoader';

import './BlogPost.css';

// Each post's content lives in its own file under src/data/blogPosts/ and is
// dynamically imported by id below, so a visitor only downloads the one post
// they're reading rather than every post's full HTML on every visit.



const BlogPost = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setPostLoading(true);

    import(`../data/blogPosts/post${id}.js`)
      .then((mod) => {
        if (isMounted) setPost(mod.default);
      })
      .catch(() => {
        if (isMounted) setPost(null);
      })
      .finally(() => {
        if (isMounted) setPostLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

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


  }, [id]);

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

  if (postLoading) {
    return <RouteLoader />;
  }

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
      <Helmet>
        <title>{post.title} | Muslim Corporate Academy</title>
        <meta name="description" content={`${post.title} - insights from Muslim Corporate Academy.`} />
      </Helmet>
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