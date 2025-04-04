import React from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine 
} from 'react-icons/fa';
import { 
  SiMicrosoftazure, 
  SiKubernetes, 
  SiAwslambda, 
  SiReact, 
  SiTypescript, 
  SiPowerplatform 
} from 'react-icons/si';
import { IoMdTime } from 'react-icons/io';
import './Portfolio.css';

const projectData = [
  {
    id: 1,
    title: "Enterprise Platform Suite (DTMA/Tmaas/DTMP)",
    description: "Architected and deployed 5 major enterprise platforms using Power Platform and Azure DevOps, reducing deployment time by 40% and increasing performance by 35%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    stats: [
      { icon: <IoMdTime />, value: "40% faster deployments" },
      { icon: <FaChartLine />, value: "35% performance boost" },
      { icon: <FaUsers />, value: "8-member team" }
    ],
    tags: [
      { icon: <SiPowerplatform />, name: "Power Platform" },
      { icon: <SiMicrosoftazure />, name: "Azure DevOps" },
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
    description: "Reduced security vulnerabilities by 60% through OWASP ZAP and SonarQube integration in CI/CD pipelines with 45% faster deployment times.",
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
    description: "Developed 4 React/TypeScript platforms serving 50,000+ MAUs with 60% faster page loads through Azure optimizations.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
    stats: [
      { icon: <FaUsers />, value: "50k+ monthly users" },
      { icon: <FaChartLine />, value: "60% faster loads" }
    ],
    tags: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiMicrosoftazure />, name: "Azure DB" }
    ],
    links: {
      demo: "#",
      code: "#"
    }
  },
  {
    id: 4,
    title: "AgriGuard AI System",
    description: "ML-based pest prediction system achieving 85% accuracy, reducing crop loss by 40% for 100 farmers in pilot program.",
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

const Portfolio = () => {
  const featuredProject = projectData.find(project => project.featured);
  const regularProjects = projectData.filter(project => !project.featured);

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
          <FeaturedProject project={featuredProject} />
        )}

        <div className="projects-grid">
          {regularProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <MetricsSection />
      </div>
    </section>
  );
};

// Component for the featured project
const FeaturedProject = ({ project }) => (
  <div className="featured-project">
    <div className="featured-image-container">
      <img 
        src={project.image} 
        alt={project.title} 
        className="featured-image"
        loading="lazy"
      />
      <div className="featured-stats">
        {project.stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-icon">{stat.icon}</span>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="featured-content">
      <h3>Flagship Project</h3>
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
        <a href={project.links.demo} className="demo-link">
          <FaExternalLinkAlt /> Case Study
        </a>
        <a href={project.links.case} className="code-link">
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

// Component for regular project cards
const ProjectCard = ({ project }) => (
  <div className="project-card">
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
);

// Component for metrics section
const MetricsSection = () => (
  <div className="metrics-section">
    <h3>My Impact By Numbers</h3>
    <div className="metrics-grid">
      <MetricCard 
        icon={<FaShieldAlt />} 
        value="60%" 
        label="Reduction in security vulnerabilities" 
      />
      <MetricCard 
        icon={<IoMdTime />} 
        value="45%" 
        label="Faster deployment times" 
      />
      <MetricCard 
        icon={<FaChartLine />} 
        value="35%" 
        label="Platform performance improvement" 
      />
      <MetricCard 
        icon={<FaUsers />} 
        value="50K+" 
        label="Monthly active users served" 
      />
    </div>
  </div>
);

// Reusable metric card component
const MetricCard = ({ icon, value, label }) => (
  <div className="metric-card">
    <span className="metric-icon">{icon}</span>
    <h4>{value}</h4>
    <p>{label}</p>
  </div>
);

export default Portfolio;