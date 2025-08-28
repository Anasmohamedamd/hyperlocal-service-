import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="btn btn-dark w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
