// import React from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import pros from "../assets/pros";

// const Professional = () => {

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 fw-bold">Our Professionals</h2>
//       <Row className="g-4">
//         {pros.map((p, index) => (
//           <Col key={index} xs={12} sm={6} md={4}>
//             <Card className="h-100 shadow-sm text-center">
//               <Card.Body>
//                 <Card.Title>{p.name}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {p.skill}
//                 </Card.Subtitle>
//                 <Card.Text>Rating: {p.rating}</Card.Text>
//                 <button className="btn btn-dark btn-sm">Hire</button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Professional;
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pros from "../assets/pros";

const Professional = () => {
  const navigate = useNavigate();

  const handleHire = (pro) => {
    navigate("/procheckout", { state: { pro } }); // send selected professional
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Our Professionals</h2>
      <Row className="g-4">
        {pros.map((p, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {p.skill}
                </Card.Subtitle>
                <Card.Text>Rating: ⭐ {p.rating}</Card.Text>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleHire(p)}
                >
                  Hire
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Professional;

