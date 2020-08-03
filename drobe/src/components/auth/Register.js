import React, { useState } from "react";
import Navbar from "../layout/Navbar";
// s
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function RegisterUser(item) {
    axios
      .post("http://localhost:5000/api/users", item, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert((res = "You're Registered"));
      })
      .catch((err) => {
        alert((err = "Something went wrong"));
      });
  }

  return (
    <div>
      <Navbar />
      <body>
        <div class="login-box">
          <h2>Register</h2>
          <form>
            <div class="user-box">
              <input type="text" name="name" value={name} onChange={onChange} />
              <label>Name</label>
            </div>
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
              />
              <label>Password</label>
            </div>
            <div class="user-box">
              <input
                type="password2"
                name="password2"
                value={password2}
                onChange={onChange}
              />
              <label>Confirm Password</label>
            </div>
            <a href="#" onClick={() => RegisterUser(user)}>
              Submit
            </a>
            <a href="/login">Login</a>
          </form>
        </div>{" "}
      </body>
    </div>
  );
};

export default Register;
