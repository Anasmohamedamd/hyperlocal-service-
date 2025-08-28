import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import service from "../assets/service"


const Service = () => {
  const navigate = useNavigate();



  const handleBookNow = (service) => {
    navigate("/checkout", { state: { service } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <Row className="g-4">
        {service.map((s, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={s.img}
                alt={s.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.desc}</Card.Text>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleBookNow(s)}
                >
                  Book Now
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;
