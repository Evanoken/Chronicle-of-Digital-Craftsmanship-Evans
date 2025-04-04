import React from 'react';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with DevSecOps",
      excerpt: "Learn how to integrate security into your CI/CD pipeline from day one.",
      date: "May 15, 2023",
      author: "Alex Johnson",
      tags: ["DevSecOps", "CI/CD", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Cloud Architecture Best Practices",
      excerpt: "Essential patterns for building scalable and resilient cloud applications.",
      date: "June 2, 2023",
      author: "Maria Garcia",
      tags: ["Cloud", "AWS", "Azure"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "React Performance Optimization",
      excerpt: "Advanced techniques to make your React applications lightning fast.",
      date: "June 18, 2023",
      author: "Sam Wilson",
      tags: ["React", "Frontend", "Performance"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Kubernetes for Beginners",
      excerpt: "A comprehensive guide to getting started with container orchestration.",
      date: "July 5, 2023",
      author: "Taylor Smith",
      tags: ["Kubernetes", "DevOps", "Containers"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Building Secure APIs",
      excerpt: "How to design and implement APIs with security in mind.",
      date: "July 22, 2023",
      author: "Jordan Lee",
      tags: ["API", "Security", "Backend"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Machine Learning in Production",
      excerpt: "Best practices for deploying and maintaining ML models.",
      date: "August 10, 2023",
      author: "Chris Wong",
      tags: ["ML", "AI", "Data Science"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      readTime: "9 min read"
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p className="section-subtitle">
            Insights and tutorials on DevSecOps, cloud engineering, and modern web development
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image-container">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-image"
                  loading="lazy"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    {post.date}
                  </span>
                  <span className="meta-item">
                    <FaUser className="meta-icon" />
                    {post.author}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-tags">
                    <FaTags className="tags-icon" />
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={`/blog/${post.id}`} className="read-more">
                    Read more <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>Want to see more articles?</p>
          <a href="/blog/archive" className="cta-button">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;