import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // redirect if not logged in
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="bg-dark text-white d-flex flex-column p-3 collapse show"
        id="sidebarMenu"
        style={{ width: "250px" }}
      >
        <h3 className="text-center mb-4">MyApp</h3>
        <ul className="nav flex-column flex-grow-1">
          <li className="nav-item mb-3">
            <a href="/dashboard" className="nav-link text-white">
              🏠 Dashboard
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              📦 Orders
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#" className="nav-link text-white">
              ⚙️ Settings
            </a>
          </li>
        </ul>
        <button
          className="btn btn-danger mt-auto"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light">
        {/* Top Bar with Sidebar Toggle */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            {/* Sidebar Toggle Button */}
            <button
              className="btn btn-outline-dark d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <h2>Dashboard</h2>
          </div>
          {user && <span className="fw-bold">👋 Welcome, {user.email}</span>}
        </div>

        {/* Cards Section */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm text-center p-3">
              <h5>Total Orders</h5>
              <h2 className="text-primary">120</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center p-3">
              <h5>Revenue</h5>
              <h2 className="text-success">$5,430</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center p-3">
              <h5>Pending Tasks</h5>
              <h2 className="text-warning">8</h2>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card shadow-sm mt-4 p-3">
          <h5>Recent Activity</h5>
          <ul className="list-group list-group-flush mt-2">
            <li className="list-group-item">✅ Order #123 completed</li>
            <li className="list-group-item">📦 Order #124 shipped</li>
            <li className="list-group-item">📝 Profile updated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
