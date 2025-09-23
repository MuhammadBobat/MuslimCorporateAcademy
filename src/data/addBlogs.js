// Blog Posts Data
// This file contains all blog post data for easy management
// To add a new blog post, simply add a new object to the blogPosts array

export const blogPosts = [
  {
    id: 1,
    title: 'Tariffs Are Back - Here’s Why You Should Care',
    preview: 'This blog breaks down Trump’s proposed tariffs, why they matter, and how they could shape global trade and your future career.',
    date: 'September 2, 2025',
    author: 'Mohamed Jama',
    categories: ['Commercial Awareness'],
    topics: ['Finance', 'Business'],
    readTime: '8 min read',
    image: '/blog-images/tarriffs.jpg'
  },
  {
    id: 2,
    title: 'Six-Figure Salaries, Infinite Accountability: What NQ Pay Rises Teach Us About Wealth and Sadaqah',
    preview: 'Exploring NQ lawyer pay rises and how to use wealth responsibly in Islam.',
    date: 'September 9, 2025',
    author: 'Mohamed Jama',
    categories: ['Commercial Awareness', 'Islamic Values'],
    topics: ['Law', 'Charity'],
    readTime: '8 min read',
    image: '/blog-images/blog2.jpg'
  },
  {
    id: 3,
    title: 'Tangible Assets vs Debt Obligations: The Subtle yet Vital role of Sukuk in Shariah-Compliant Transactions',
    preview: 'This article will explore the role of sukuk, as counterparts to conventional bonds, in the world of Islamic banking and finance.',
    date: 'September 23, 2025',
    author: 'Sohayb Nassier',
    categories: ['Commercial Awareness', 'Islamic Values'],
    topics: ['Finance', 'Law', 'Business'],
    readTime: '7 min read',
    image: '/blog-images/blog3.jpeg'
  }
];

// Instructions for adding new blog posts:
// 1. Add a new object to the blogPosts array above
// 2. Use the next available ID number
// 3. Set categories to an array of one or more: 'Commercial Awareness', 'Islamic Values', 'Student Life', 'Application Support'
// 4. Set topics to an array of subtags (Finance, Law, Investment, Consulting, Data, Business, etc.) or null
// 5. Make sure the image path exists in the public/blog-images/ folder
// 6. The blog post will automatically appear in the blog page
