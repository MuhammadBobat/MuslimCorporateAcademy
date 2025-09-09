import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addComment, getComments } from '../services/commentService';

import './BlogPost.css';

// Sample blog content - you can easily replace this with real content
const blogContent = {
  1: {
    id: 1,
    title: 'The Return of Trump-Era Tariffs: Why It Matters for Your Career',
    author: 'Mohamed Jama',
    date: 'September 9, 2025',
    readTime: '8 min read',
    tags: ['Finance', 'Business'],
    image: '/blog-images/tarriffs.jpg',
    content: `
      <p>Tariffs are back in the headlines, and not in a small way. With the return of Trump-era proposals, global trade policy is once again becoming a major talking point. But what exactly do these tariffs mean, why are they making a comeback, and how could they affect industries and careers?</p>
      
      <p>For students and early professionals aiming for fields like law, business, policy, or finance, understanding these developments is about more than passing interest. Being able to connect global news to professional realities is a skill that will make you stand out, whether in interviews or in the workplace.</p>
      
      <p>We'll keep things straightforward, relevant, and practical, so that you walk away with an informed perspective on why this matters.</p>
      
      <h2>What Are Tariffs, and Why Do They Matter?</h2>
      
      <p>At their core, tariffs are taxes placed on goods imported from abroad. By making foreign products more expensive, they encourage consumers and businesses to turn to local alternatives instead. They also serve as a revenue stream for governments: if a UK company imports phones, the import tax goes directly into government coffers.</p>
      
      <p>On the surface, this seems like a simple mechanism. Tariffs protect domestic industries, level the playing field, and give local businesses the opportunity to grow. But here's where it becomes more complex: no economy is entirely self-sufficient. Every country depends on imports, whether for raw materials, technology, or food.</p>
      
      <p>When tariffs rise too high or are applied too broadly, they risk disrupting global trade flows, driving up consumer prices, and straining international relations. What starts as a protective measure at home can quickly spiral into global economic friction.</p>
      
      <h2>Trump's Approach: A Closer Look</h2>
      
      <p>During his first presidency, Donald Trump used tariffs extensively under his "America First" strategy. Now, he is campaigning on even bolder proposals:</p>
      
      <ul>
        <li>A 10% universal tariff on all imports into the United States.</li>
        <li>A 60% tariff specifically targeting Chinese goods.</li>
      </ul>
      
      <p>These are significant moves in a global economy that has long been built on the principles of free trade. Supporters argue that such policies protect American jobs and strengthen domestic industries. Critics, however, point out the risks: higher prices for consumers, retaliatory tariffs from trade partners, and the potential for prolonged trade wars.</p>
      
      <p>Consider China as an example. If tariffs make Chinese products too expensive for American buyers, Chinese exporters lose access to one of their biggest markets. That translates into lower sales, reduced profits, and slower economic growth. Often, countries in this position are pressured into trade agreements tilted in the U.S.'s favour. The "Phase One" trade deal is a prime example: China committed to buying more American goods in exchange for reduced tariffs.</p>
      
      <p>But not all countries comply. When negotiations stall, retaliation follows. If China imposes its own tariffs on U.S. exports, both economies suffer — and the ripple effects spread across global markets, raising prices and destabilising supply chains worldwide.</p>
      
      <h2>Why Students and Future Professionals Should Care</h2>
      
      <p>At this point, you might be asking: what does this have to do with me? The answer is simple; tariffs don't just shape economies, they shape careers.</p>
      
      <div class="highlight-box">
        <h3>For future lawyers:</h3>
        <p>Tariffs create new dimensions of commercial law. Contract disputes may arise over who bears the cost of added import taxes. Supply chain disruptions lead to litigation when delivery deadlines or quantities are missed. Cross-border disputes become more common as companies navigate competing regulations. Even mergers and acquisitions require careful analysis of tariff exposure, since rising costs can impact profitability.</p>
        
        <h3>For business and finance students:</h3>
        <p>Tariffs directly influence company strategies. Increased import costs squeeze profit margins, forcing businesses to choose between raising consumer prices or absorbing losses. This pushes firms to revisit supply chain structures, renegotiate contracts, and sometimes relocate production to avoid unfavourable trade barriers. For careers in consulting, investment banking, or corporate strategy, the ability to assess and advise on these changes is invaluable.</p>
        
        <h3>For those in policy and economics:</h3>
        <p>Tariffs are case studies in how domestic politics intersects with international trade. They show how decisions framed as "protecting jobs" can have far-reaching consequences for inflation, foreign relations, and global growth. Understanding these connections helps future policymakers, analysts, and researchers contribute meaningfully to debates on trade and economic strategy.</p>
      </div>
      
      <h2>The Bigger Picture: Commercial Awareness</h2>
      
      <p>Ultimately, being commercially aware is not about memorising every tariff proposal or becoming a trade expert. It's about recognising patterns: how global events, government policies, and business decisions interact, and how they impact the industries you aim to work in.</p>
      
      <p>When tariffs disrupt supply chains, legal teams adapt contracts, consultants rework strategies, and finance professionals adjust valuations. These ripple effects shape the environment you'll step into as a professional. If you can demonstrate an ability to connect global headlines to real-world consequences, you set yourself apart from peers who view the news as distant or irrelevant.</p>
      
      <h2>Final Thoughts</h2>
      
      <p>Trade policy may seem abstract, but its effects are concrete: higher prices at the checkout, shifting global supply chains, and new professional challenges in law, business, finance, and beyond. Trump's proposed tariffs are just one example of how political agendas shape economic realities - and by extension, professional ones.</p>
      
      <p>Commercial awareness is about more than following the news. It's about asking: what does this mean for the industries I care about, and the career path I'm pursuing? That mindset is what gives you a competitive edge in interviews, in the workplace, and in the long run.</p>
      
      <p><em>JazakAllahu Khair for reading, and stay tuned for more insights that connect global events to your growth and success.</em></p>
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