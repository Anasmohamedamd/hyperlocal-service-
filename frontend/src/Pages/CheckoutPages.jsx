import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  if (!service) return <h2 className="text-center mt-5">No service selected. Please go back.</h2>;

  const handleBooking = () => {
    alert(`✅ Booking confirmed for ${service.title}`);
    navigate("/dashboard"); // Redirect to dashboard after booking
  };

  const tax = Math.round(service.price * 0.05); // 5% tax
  const total = service.price + tax;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row g-4">
            
            {/* Left Side - Service Details */}
            <div className="col-md-7">
              <div className="card shadow-lg border-0">
               <img
                  src={service.img}   // will become /images/cleaning.jpg
                  className="card-img-top"
                  alt={service.title}
                  style={{ objectFit: "cover", height: "300px" }}
                  />
                <div className="card-body">
                  <h3 className="fw-bold">{service.title}</h3>
                  <p className="text-muted">{service.desc}</p>
                  <h5 className="text-success fw-bold">₹{service.price}</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-5">
              <div className="card shadow-lg border-0">
                <div className="card-body">
                  <h4 className="fw-bold mb-3">Order Summary</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Service Price</span>
                      <span>₹{service.price}</span>
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
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleBooking}
                  >
                    Confirm & Book
                  </button>
                  <p className="mt-2 text-muted small text-center">
                    Secure booking, cancel anytime before service starts 🚀
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
