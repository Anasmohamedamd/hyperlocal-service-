import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProfessionalCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pro } = location.state || {};

  if (!pro) return <h2 className="text-center mt-5">No professional selected. Please go back.</h2>;

  const serviceFee = 500; // fixed fee
  const tax = Math.round(serviceFee * 0.05);
  const total = serviceFee + tax;

  const handleConfirm = () => {
    alert(`✅ You have successfully booked ${pro.name}`);
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Checkout</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-3">Professional Details</h4>
              <p><b>Name:</b> {pro.name}</p>
              <p><b>Skill:</b> {pro.skill}</p>
              <p><b>Rating:</b> ⭐ {pro.rating}</p>

              <hr />

              <h4 className="fw-bold mb-3">Order Summary</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Service Fee</span>
                  <span>₹{serviceFee}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </li>
              </ul>

              <button className="btn btn-primary w-100" onClick={handleConfirm}>
                Confirm & Hire
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCheckout;
