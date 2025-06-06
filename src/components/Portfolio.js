import React from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine,
  FaCloud,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiAwslambda, 
  SiReact, 
  SiTypescript
} from 'react-icons/si';
import { IoMdTime } from 'react-icons/io';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise Platform Suite",
      description: "Architected and deployed enterprise platforms reducing deployment time by 40%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      stats: [
        { icon: <IoMdTime />, value: "40% faster deployments" },
        { icon: <FaChartLine />, value: "35% performance boost" },
        { icon: <FaUsers />, value: "8-member team" }
      ],
      tags: [
        { icon: <FaMicrosoft />, name: "Azure DevOps" },
        { icon: <SiTypescript />, name: "TypeScript" }
      ],
      links: {
        case: "#",
        demo: "#"
      },
      featured: true
    },
    {
      id: 2,
      title: "DevSecOps Implementation",
      description: "Reduced security vulnerabilities by 60% through CI/CD improvements.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      stats: [
        { icon: <FaShieldAlt />, value: "60% fewer vulnerabilities" },
        { icon: <IoMdTime />, value: "45% faster deployments" }
      ],
      tags: [
        { icon: <FaShieldAlt />, name: "DevSecOps" },
        { icon: <SiKubernetes />, name: "Kubernetes" }
      ],
      links: {
        doc: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "E-Commerce Platforms",
      description: "Developed platforms serving 50,000+ users with 60% faster page loads.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      stats: [
        { icon: <FaUsers />, value: "50k+ monthly users" },
        { icon: <FaChartLine />, value: "60% faster loads" }
      ],
      tags: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" }
      ],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      id: 4,
      title: "AgriGuard AI System",
      description: "ML-based system achieving 85% accuracy for pest prediction.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      stats: [
        { icon: <FaChartLine />, value: "85% accuracy" },
        { icon: <FaUsers />, value: "100 farmers" }
      ],
      tags: [
        { icon: <FaCloud />, name: "AI/ML" },
        { icon: <SiAwslambda />, name: "AWS Lambda" }
      ],
      links: {
        demo: "#",
        paper: "#"
      }
    }
  ];

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>DevSecOps & Cloud Engineering Portfolio</h2>
          <p className="section-subtitle">
            Enterprise solutions with measurable performance and security improvements
          </p>
        </div>

        {featuredProject && (
          <div className="featured-project">
            <div className="featured-image-container">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="featured-image"
                loading="lazy"
              />
              <div className="featured-stats">
                {featuredProject.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-icon">{stat.icon}</span>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-content">
              <h3>Flagship Project</h3>
              <h4>{featuredProject.title}</h4>
              <p>{featuredProject.description}</p>
              <div className="tech-tags">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.icon}
                    <span>{tag.name}</span>
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={featuredProject.links.demo} className="demo-link">
                  <FaExternalLinkAlt /> Case Study
                </a>
                <a href={featuredProject.links.case} className="code-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {regularProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className="project-stats">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="stat-badge">
                      <span className="stat-icon">{stat.icon}</span>
                      <span>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag.icon}
                      <span>{tag.name}</span>
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.demo && (
                    <a href={project.links.demo}>
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                  {project.links.code && (
                    <a href={project.links.code}>
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="metrics-section">
          <h3>My Impact By Numbers</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <FaShieldAlt className="metric-icon" />
              <h4>60%</h4>
              <p>Reduction in security vulnerabilities</p>
            </div>
            <div className="metric-card">
              <IoMdTime className="metric-icon" />
              <h4>45%</h4>
              <p>Faster deployment times</p>
            </div>
            <div className="metric-card">
              <FaChartLine className="metric-icon" />
              <h4>35%</h4>
              <p>Platform performance improvement</p>
            </div>
            <div className="metric-card">
              <FaUsers className="metric-icon" />
              <h4>50K+</h4>
              <p>Monthly active users served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;