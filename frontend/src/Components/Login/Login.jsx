import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      toast.success(`Connexion réussie ${response.data.name} !`);
      login(response.data.token); // Call the login function from AuthContext
      navigate("/annonces");
    } catch (error) {
      alert("Login failed: " + error.response.data);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <form onSubmit={handleLogin}>
        <h1>Connexion</h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type={"submit"} className="btn btn-primary">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default Login;
