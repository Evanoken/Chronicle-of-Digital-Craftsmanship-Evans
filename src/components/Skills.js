import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import awsBadge from "../assets/img/aws-badge.png"; // Replace with your actual certificate image path
import alxCertificate from "../assets/img/alx-certificate.png"; // Replace with your actual certificate image path
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg"; // Retained but unused in original code
import arrow2 from "../assets/img/arrow2.svg"; // Retained but unused in original code
import colorSharp from "../assets/img/color-sharp.png";

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

  // Define your certificates
  const certifications = [
    {
      image: awsBadge,
      name: "AWS Certified Solutions Architect",
      button: {
        type: "Verify",
        link: "https://aws.amazon.com/verification",
      },
    },
    {
      image: alxCertificate,
      name: "ALX Software Engineering Certificate",
      button: {
        type: "Validate",
        link: "https://intranet.alxswe.com/certificates/xRm2EMRFn",
      },
    },
    // Add more certificates here as needed
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Certifications</h2>
              <p>
                With expertise in DevOps, full-stack development (specialized in back-end development), and multi-cloud platforms, I deliver scalable, secure, and efficient solutions. My skills in React, TypeScript, Azure DevOps, AWS, Kubernetes, and microservices ensure high-performance applications and streamlined development workflows.
              </p>

              {/* Skills Carousel */}
              <h3>Skills</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="TypeScript" />
                  <h5>React && TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Flask & Django" />
                  <h5>Flask && Django</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Node JS" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Azure DevOps" />
                  <h5>Azure DevOps</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="AWS" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Kubernetes" />
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Microservices" />
                  <h5>Microservices</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="DevSecOps" />
                  <h5>DevSecOps</h5>
                </div>
              </Carousel>

              {/* Certifications Carousel */}
              <h3>Certifications</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme certifications-slider"
              >
                {certifications.map((cert, index) => (
                  <div className="item" key={index}>
                    <img src={cert.image} alt={cert.name} />
                    <h5>{cert.name}</h5>
                    <a
                      href={cert.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-button"
                    >
                      {cert.button.type}
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};