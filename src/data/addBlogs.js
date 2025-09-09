// Blog Posts Data
// This file contains all blog post data for easy management
// To add a new blog post, simply add a new object to the blogPosts array

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Fintech: Islamic Banking Meets Technology',
    preview: 'Islamic banking and financial technology are converging in exciting ways, creating new opportunities for Muslim professionals and businesses.',
    date: 'December 15, 2024',
    author: 'MCA Team',
    categories: ['Commercial Awareness'],
    topic: 'Finance',
    readTime: '5 min read',
    image: '/blog-images/fintech-islamic-banking.jpg'
  },
  {
    id: 2,
    title: 'Navigating Corporate Law: A Muslim Perspective',
    preview: 'Understanding corporate law from an Islamic perspective can help Muslim professionals navigate complex legal environments.',
    date: 'December 8, 2024',
    author: 'MCA Team',
    categories: ['Commercial Awareness', 'Islamic Values'],
    topic: 'Law',
    readTime: '7 min read',
    image: '/blog-images/corporate-law-muslim.jpg'
  },
  {
    id: 3,
    title: 'Computer Science Ethics: Building Technology with Islamic Values',
    preview: 'How Islamic ethics can guide the development of technology that benefits humanity.',
    date: 'December 1, 2024',
    author: 'MCA Team',
    categories: ['Islamic Values'],
    topic: null,
    readTime: '6 min read',
    image: '/blog-images/cs-ethics-islamic.jpg'
  },
  {
    id: 4,
    title: 'Investment Banking: Understanding the Markets',
    preview: 'A comprehensive guide to understanding investment banking from an Islamic finance perspective.',
    date: 'November 24, 2024',
    author: 'MCA Team',
    categories: ['Commercial Awareness'],
    topic: 'Investment',
    readTime: '8 min read',
    image: '/blog-images/investment-banking-markets.jpg'
  },
  {
    id: 5,
    title: 'Consulting Careers: From Strategy to Implementation',
    preview: 'Exploring consulting careers and how Muslim professionals can excel in this field.',
    date: 'November 17, 2024',
    author: 'MCA Team',
    categories: ['Commercial Awareness'],
    topic: 'Consulting',
    readTime: '4 min read',
    image: '/blog-images/consulting-careers.jpg'
  },
  {
    id: 6,
    title: 'Data Science in the Modern Economy',
    preview: 'How data science is transforming the modern economy and opportunities for Muslim professionals.',
    date: 'November 10, 2024',
    author: 'MCA Team',
    categories: ['Commercial Awareness'],
    topic: 'Data',
    readTime: '9 min read',
    image: '/blog-images/data-science-economy.jpg'
  },
  {
    id: 8,
    title: 'Writing Your Personal Statement: Islamic Values Edition',
    preview: 'How to craft a compelling personal statement that reflects your Islamic values and academic goals.',
    date: 'October 27, 2024',
    author: 'MCA Team',
    categories: ['Application Support'],
    topic: null,
    readTime: '8 min read',
    image: '/blog-images/personal-statement-guide.jpg'
  },
  {
    id: 9,
    title: 'Technology Ethics in the Digital Age',
    preview: 'Exploring how Islamic principles can guide ethical decision-making in technology development.',
    date: 'October 20, 2024',
    author: 'MCA Team',
    categories: ['Islamic Values'],
    topic: null,
    readTime: '7 min read',
    image: '/blog-images/tech-ethics-islamic.jpg'
  },
  {
    id: 10,
    title: 'Career Guidance for Muslim Students',
    preview: 'Practical advice on choosing career paths that align with Islamic values and personal goals.',
    date: 'October 13, 2024',
    author: 'MCA Team',
    categories: ['Islamic Values'],
    topic: null,
    readTime: '5 min read',
    image: '/blog-images/career-guidance-muslim.jpg'
  }
];

// Instructions for adding new blog posts:
// 1. Add a new object to the blogPosts array above
// 2. Use the next available ID number
// 3. Set categories to an array of one or more: 'Commercial Awareness', 'Islamic Values', 'Student Life', 'Application Support'
// 4. Set topic to one of the Commercial Awareness topics (Finance, Law, Investment, Consulting, Data) or null
// 5. Make sure the image path exists in the public/blog-images/ folder
// 6. The blog post will automatically appear in the blog page
