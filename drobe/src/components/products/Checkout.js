import React, { useState, PropTypes } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "../products/Checkout.css";

const CheckOut = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    zip: "",
    creditNo: "",
    exp: "",
    cvc: "",
  });
  const { firstName, lastName, city, street, zip, creditNo, exp, cvc } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function getMessage(item) {
    if (user === user) {
      alert("Your checkout has been made!.");
    }
  }
  return (
    <div>
      <Navbar />
      <body>
        <div class="login-box">
          <h2>Register</h2>
          <form>
            <div class="user-box">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
              <label>First Name</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
              <label>Last Name</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name="street"
                value={street}
                onChange={onChange}
              />
              <label>Street</label>
            </div>
            <div class="user-box">
              <input type="text" name="city" value={city} onChange={onChange} />
              <label>City</label>
            </div>
            <div class="user-box">
              <input type="text" name="zip" value={zip} onChange={onChange} />
              <label>Zip</label>
            </div>

            <h2>Register</h2>
            <div class="user-box">
              <input
                type="password"
                name="creditNo"
                value={creditNo}
                onChange={onChange}
              />
              <label>Credit Card No.</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                name="exp"
                value={exp}
                onChange={onChange}
              />
              <label>EXP</label>
            </div>
            <div class="user-box">
              <input
                type="password2"
                name="cvc"
                value={cvc}
                onChange={onChange}
              />
              <label>CVC</label>
            </div>
            <a href="#" onClick={() => CheckOut(user)}>
              Submit
            </a>
            <a href="/login">Login</a>
          </form>
        </div>
      </body>
    </div>
  );
};

export default CheckOut;
