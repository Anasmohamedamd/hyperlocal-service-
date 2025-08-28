import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
     const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert("Login Successful!");
      console.log(response.data);

      localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="mb-4 d-flex justify-content-center align-items-center vh-100">
      <div 
        className="card shadow" 
        style={{ width: "400px", border: "1px solid #aaa" }} // thinner border
      >
        <div className="card-body">
          <h2 className="text-center mb-5">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5 d-flex justify-content-center">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
                style={{ width: "300px" }}
                required
              />
            </div>
            <div className="mb-5 d-flex justify-content-center">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                style={{ width: "300px" }}
                required
              />
            </div>
            <button type="submit" className="mb-4 btn btn-dark w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
