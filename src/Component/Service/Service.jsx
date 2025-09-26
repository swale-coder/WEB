import React from "react";
import "./Service.css"; // styles for service section
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";


const Service = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "We build fast, responsive, and scalable websites using the latest technologies.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Crafting beautiful and user-friendly interfaces that enhance customer engagement.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, ads, and marketing strategies that drive results.",
    },
  ];

  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="service-title">Our Services</h2>
        <p className="service-subtitle">
          We provide top-notch digital solutions to help your business grow.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
