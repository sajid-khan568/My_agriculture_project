import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-5 fw-bold">🌱 About Gour Krishi Seva Kendra</h1>

      <p className="lead text-center">
        Gour Krishi Seva Kendra is more than just a store – it’s a partner in your agricultural journey. 
        We proudly serve our farming community with high-quality products, expert advice, and personalized support.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4 className="fw-bold">🎯 Our Mission</h4>
          <p>
            To empower farmers by providing affordable, genuine, and effective agricultural inputs like seeds, fertilizers,
            pesticides, and tools, along with professional guidance to enhance productivity and income.
          </p>

          <h4 className="fw-bold mt-4">🌟 Our Vision</h4>
          <p>
            To be the most trusted and accessible agricultural resource hub in Madhya Pradesh, ensuring that every farmer,
            regardless of land size, has access to modern solutions and sustainable practices.
          </p>
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">💡 Why Choose Us?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Certified quality seeds and fertilizers</li>
            <li className="list-group-item">✅ Fair pricing and reliable products</li>
            <li className="list-group-item">✅ Practical farming advice from experts</li>
            <li className="list-group-item">✅ Easy availability and doorstep delivery options</li>
            <li className="list-group-item">✅ Strong relationship with local farming communities</li>
          </ul>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-4">
          <h2 className="text-success">500+</h2>
          <p>Happy Farmers Served</p>
        </div>
        <div className="col-md-4">
          <h2 className="text-success">120+</h2>
          <p>Products Available</p>
        </div>
        <div className="col-md-4">
          <h2 className="text-success">10+</h2>
          <p>Years of Trust</p>
        </div>
      </div>

      <div className="text-center">
        <a href="tel:+919630258473" className="btn btn-primary btn-lg px-4 py-2 mt-3 shadow-sm">हमसे संपर्क करें</a>

      </div>
    </div>
  );
};

export default About;
