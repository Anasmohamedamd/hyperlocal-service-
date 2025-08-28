import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Fetch user details from backend
      axios
        .get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to fetch profile data");
        });
    }
  }, []);

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: "400px", border: "1px solid #aaa" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">My Profile</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>

          {/* Optional Update Button */}
          <button className="btn btn-dark w-100">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
