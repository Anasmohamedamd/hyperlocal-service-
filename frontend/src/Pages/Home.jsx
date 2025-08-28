import React from "react";
import img1 from "../assets/img-1.webp";
import cleaning from "../assets/cleaningimg.jpg";
import plumber from "../assets/plumberimg.jpg";
import electrician from "../assets/electricianimg.jpg";
import { Nav } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container" style={{ marginTop: 40 }}>
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div className="col-md-6 text-left">
            <h1>Welcome to ServicePlace</h1>
            <p className="lead">
              Find trusted professionals for all your local needs.
            </p>
            <button className="btn btn-dark mt-3"><Nav.Link href="/service">Explore Services</Nav.Link></button>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={img1}
              alt="Service Illustration"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container text-center mt-5">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light">
              <h5>✅ Verified Professionals</h5>
              <p>All our service providers are background-checked.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light">
              <h5>⚡ Quick Service</h5>
              <p>Book and get services delivered in no time.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-light">
              <h5>💰 Affordable Prices</h5>
              <p>Get the best services at budget-friendly rates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="container text-center mt-5">
        <h2 className="fw-bold mb-4">Popular Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src={cleaning} className="card-img-top" alt="Cleaning" />
              <div className="card-body">
                <h5 className="card-title">Home Cleaning</h5>
                <p className="card-text">Professional cleaning for a spotless home.</p>
                <button className="btn btn-dark btn-sm">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src={plumber} className="card-img-top" alt="Plumber" />
              <div className="card-body">
                <h5 className="card-title">Plumbing</h5>
                <p className="card-text">Expert plumbers for quick fixes and installation.</p>
                <button className="btn btn-dark btn-sm">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <img src={electrician} className="card-img-top" alt="Electrician" />
              <div className="card-body">
                <h5 className="card-title">Electrician</h5>
                <p className="card-text">Reliable electricians for all electrical needs.</p>
                <button className="btn btn-dark btn-sm">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
