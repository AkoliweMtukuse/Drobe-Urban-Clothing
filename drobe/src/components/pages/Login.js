import React from "react";
import axios from "axios";
import "./homeComponents/Login.css";

const Login = ({ product }) => {
  const [product, setProduct] = useState({
    password: "",
    email: "",
    saving: "",
  });
  const { email, password } = product;

  // funtion getproducts(){

  // }
  function loginInfo(item) {
    axios
      .check("http://localhost:5000/api/users", item, {
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
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" value={product.email} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" value={product.password} required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default Login;
