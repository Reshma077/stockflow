import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", user);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/products");
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>StockFlow Login</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "15px",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}

export default Login;