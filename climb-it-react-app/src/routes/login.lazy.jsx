import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const apiURL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.error) {
        // Handle successful login
        console.log("Logged in successfully");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Failed to login: ", error);
      setError("Failed to login");
    }
  };

  return (
    <div className="login-container">
      <h2 className="container-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-container">
          Email:
          <input
            className="outlined-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="input-container">
          Password:
          <input
            className="outlined-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="primary-button" type="submit">
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
