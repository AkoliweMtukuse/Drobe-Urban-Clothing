import React, { useState, PropTypes } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from "axios";
import "./homeComponents/Login.css";
import { useHistory } from "react-router-dom";

const Login = (parentCallback) => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function sendData(data) {}

  function LoginUser(item) {
    axios
      .post("http://localhost:5000/api/auth", item, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        history.push({ pathname: "/shop", state: res.data });
        alert((res = "You're logged in"));
      })
      .catch((err) => {
        console.log(err);
        alert((err = "Something went wrong"));
      });
  }

  return (
    <div>
      <Navbar />
      <body>
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required=""
              />
              <label>Password</label>
            </div>
            <a href="#" onClick={() => LoginUser(user)}>
              Submit
            </a>
            <a href="/register">Register ?</a>
          </form>
        </div>{" "}
      </body>
    </div>
  );
};

export default Login;
