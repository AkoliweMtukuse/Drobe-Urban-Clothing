import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function LoginUser(item) {
    axios
      .get("http://localhost:5000/api/auth", item, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form-container">
      <h1>
        <span className="text-pimary">Login</span>
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn block"
          onClick={() => LoginUser(user)}
        />
        <br></br>
        <Link to="./Register">Register an Account</Link>
      </form>
    </div>
  );
};

export default Login;
