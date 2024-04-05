import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./style.css";
function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MDBContainer fluid className="p-3 mt-5"> {/* Added mt-5 class to add margin-top */}
    <MDBRow>
      <MDBCol col="10" md="6">
        <img
          src="https://www.cflowapps.com/wp-content/uploads/2021/06/procrmntvs-purchasng.jpg"
          className="img-fluid"
          alt="Phone image" // Changed class to className for React
        />
      </MDBCol>

      <MDBCol col="4" md="6" style={{ width: "500px" }}>
        <h1 style={{ margin: "30px" }}>
          <center>Login Page</center>
        </h1>
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Email address"
          id="formControlLg"
          type="email"
          size="lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Password"
          id="formControlLg"
          type="password"
          size="lg"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="mb-4 w-100"
          size="lg"
          style={{
            background: "blue",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={submit}
        >
          Log in
        </button>
        <h5>
          Don't have account? <Link to="/signup">Sign Up</Link>
        </h5>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}

export default Login;
