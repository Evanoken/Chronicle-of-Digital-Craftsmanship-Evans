import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import awsBadge from "../assets/img/aws-badge.png";
import alxCertificate from "../assets/img/alx-certificate.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import './Skills.css'; // Create this file for custom styles

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const certifications = [
    {
      image: awsBadge,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "November 2020",
      button: {
        type: "Verify",
        link: "https://aws.amazon.com/verification",
      },
    },
    {
      image: alxCertificate,
      name: "ALX Software Engineering Certificate",
      issuer: "ALX Africa",
      date: "November 2020",
      description: "12-month intensive software engineering program with specialization in Back-end",
      button: {
        type: "Validate",
        link: "https://intranet.alxswe.com/certificates/xRm2EMRFn",
      },
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills & Certifications</h2>
              <p className="skill-description">
                With expertise in DevOps, full-stack development (specialized in back-end development), and multi-cloud platforms, I deliver scalable, secure, and efficient solutions.
              </p>

              {/* Skills Carousel */}
              <h3 className="section-subtitle">Technical Skills</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="skill-item">
                  <img src={meter1} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="skill-item">
                  <img src={meter2} alt="TypeScript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="skill-item">
                  <img src={meter3} alt="Flask & Django" />
                  <h5>Flask & Django</h5>
                </div>
                <div className="skill-item">
                  <img src={meter1} alt="Node JS" />
                  <h5>Node JS</h5>
                </div>
                <div className="skill-item">
                  <img src={meter2} alt="Azure DevOps" />
                  <h5>Azure DevOps</h5>
                </div>
                <div className="skill-item">
                  <img src={meter3} alt="AWS" />
                  <h5>AWS</h5>
                </div>
                <div className="skill-item">
                  <img src={meter1} alt="Kubernetes" />
                  <h5>Kubernetes</h5>
                </div>
                <div className="skill-item">
                  <img src={meter2} alt="Microservices" />
                  <h5>Microservices</h5>
                </div>
                <div className="skill-item">
                  <img src={meter3} alt="DevSecOps" />
                  <h5>DevSecOps</h5>
                </div>
              </Carousel>

              {/* Certifications Section */}
              <div className="certifications-section">
                <h3 className="section-subtitle">Certifications</h3>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="certifications-slider"
                >
                  {certifications.map((cert, index) => (
                    <div className="certification-card" key={index}>
                      <div className="cert-image-container">
                        <img src={cert.image} alt={cert.name} className="cert-image" />
                      </div>
                      <div className="cert-details">
                        <h4>{cert.name}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        {cert.description && <p className="cert-description">{cert.description}</p>}
                        <p className="cert-date">Issued: {cert.date}</p>
                        <a
                          href={cert.button.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-button"
                        >
                          {cert.button.type}
                        </a>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};