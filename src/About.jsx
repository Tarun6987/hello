import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-dark">About Amazon</h1>
      </header>

      <section className="mb-4">
        <h2 className="h3 text-primary">Who We Are</h2>
        <p>
          Amazon is a global e-commerce and cloud computing leader, offering a wide variety of products
          and services to customers around the world. From books to electronics, and cloud storage to streaming services,
          we aim to be Earth's most customer-centric company.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h3 text-primary">Our Mission</h2>
        <p>
          Our mission is to offer customers the lowest possible prices, the best available selection, and the utmost convenience.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h3 text-primary">Our Services</h2>
        <ul className="list-unstyled">
          <li><i className="fas fa-check-circle text-success"></i> Amazon Marketplace: Buy and sell a wide range of products</li>
          <li><i className="fas fa-check-circle text-success"></i> Amazon Prime: Membership offering fast delivery, streaming, and more</li>
          <li><i className="fas fa-check-circle text-success"></i> Amazon Web Services (AWS): Cloud computing solutions</li>
          <li><i className="fas fa-check-circle text-success"></i> Amazon Fresh: Grocery delivery service</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="h3 text-primary">Our Global Impact</h2>
        <p>
          Amazon operates globally with offices, fulfillment centers, and data centers in various regions. We focus on improving
          sustainability, reducing carbon footprints, and contributing to local communities.
        </p>
      </section>

      <footer className="text-center mt-5">
        <p>© 2024 Amazon. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
export default About;
