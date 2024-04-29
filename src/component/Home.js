import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./iitlogo.png";
import profileImage from "./profile.png";
import { useEffect, useState } from "react";

function Home() {
  const location = useLocation();
  const history = useNavigate();

  const [usercred, setUserCred] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const userdeatils = async () => {
    const response = await fetch("http://localhost:8080/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("usertoken"),
      },
    });
    const json = await response.json();
    console.log(json);
    setUserCred(json);
    setUserName(json[0].fullName);
    setUserEmail(json[0].email);
  };

  useEffect(() => {
    userdeatils();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usetoken");
    sessionStorage.removeItem("usetoken");
    history("/login");
  };

  return (
    <div
      className="homepage"
      style={{ backgroundColor: "#003366", height: "100vh", color: "white" }}
    >
      <div
        style={{
          background: "rgb(0, 51, 102)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left", // Text aligned left
          //   padding: '0 10%' // Padding added for centering content in the middle
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "70px",
              height: "70px",
              marginRight: "50px",
              marginLeft: "30px",
            }}
          />
          <div style={{ flexGrow: 1 }}>
            <h2 style={{ textDecoration: "underline", color: "white" }}>
              E-Marketplace - India Institute of Technology Kharagpur
            </h2>
            <h5 style={{ color: "white" }}>eprocurement for IIT Kharagpur</h5>
          </div>
          <li className="nav-item dropdown" style={{ listStyleType: "none" }}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: "50px", // Reduced size for a more balanced look
                  height: "50px", // Keep the image circular
                  borderRadius: "50%", // Make the image round
                  marginRight: "10px",
                  marginTop: "10px",
                  objectFit: "cover", // Ensures the image fits well
                }}
              />
              <span style={{ color: "white", fontWeight: "bold" }}>
                {userName}
              </span>
            </a>
            <ul
              className="dropdown-menu"
              style={{
                backgroundColor: "white",
                paddingLeft: "10px",
                border: "none", // Removes the default border
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Adds subtle shadow for depth
              }}
            >
              <li
                style={{ padding: "8px 12px", fontSize: "16px", color: "black" }}
              >
                {userName}
              </li>
              <li
                style={{ padding: "8px 12px", fontSize: "14px", color: "bLack" }}
              >
                {userEmail}
              </li>
              <li>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                  style={{ color: "black", borderColor: "black", padding: "8px 12px" }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0055b7" }}
      >
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "center" }}
          >
            <ul
              className="navbar-nav"
              style={{ justifyContent: "center", width: "100%" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Home&nbsp; |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/home/form"
                  style={{ color: "white" }}
                >
                  New Tender&nbsp; |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  {" "}
                  Corrigendum&nbsp; |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  About&nbsp; |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  Contact Us
                </a>
              </li>
              {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                Tender
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#0055b7' }}>
                <li><Link to="/home/form" className="dropdown-item" style={{ color: 'white' }}>New Tender</Link></li>
                <li><Link to="#" className="dropdown-item" style={{ color: 'white' }}>Corrections</Link></li>
              </ul>
            </li> */}
            </ul>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
            </div>
          </div>
        </div>
      </nav>
      <div style={{ padding: '20px', backgroundColor: '#fff', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '3px solid #000', paddingBottom: '10px' }}>Tenders</h1>
      <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
        Current Active Tenders Information
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button style={{ backgroundColor: '#ff8c00', color: '#fff', padding: '10px 20px', marginRight: '5px', border: 'none', cursor: 'pointer' }}>
          ACTIVE
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#0055b7', color: '#fff' }}>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>S.No.</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Title & Ref No</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Critical Date</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Corrigendum Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', padding: '15px', border: '1px solid #ddd' }}>1</td>
            <td style={{ padding: '15px', border: '1px solid #ddd' }}>
              Engagement of CERT-in Empanelled Information System (IS) Audit Service Provider for Conducting Information System Audit of ERP System
              <br />
              <span style={{ color: '#555' }}>Ref No: IITKGP/ERP/ISA/2024-25/01</span>
            </td>
            <td style={{ padding: '15px', border: '1px solid #ddd' }}>
              Start Date: 01 Apr 2024 03:00 PM
              <br />
              End Date: 30 Apr 2024 03:00 PM
              <br />
              Bid Opening Date: 02 May 2024 04:00 PM
            </td>
            <td style={{ textAlign: 'center', padding: '15px', border: '1px solid #ddd' }}>
              <button style={{ backgroundColor: '#0055b7', color: '#fff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                Corrigendum-1
              </button>
            </td>
          </tr>
          {/* Repeat the above <tr> for each tender entry */}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Home;
