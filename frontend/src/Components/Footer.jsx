import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Careers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/professionals" className="text-light text-decoration-none">Professionals</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@serviceplace.com</p>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} ServicePlace. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
