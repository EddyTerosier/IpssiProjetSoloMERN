import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ onUserAdded }) => {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const addUser = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/users",
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Utilisateur créé avec succès");
      setNewUser({ name: "", email: "", password: "" });
      if (onUserAdded) {
        onUserAdded(response.data);
      }
      if (!token) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Inscription</h1>
      <form onSubmit={addUser}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            required
            value={newUser.name}
            onChange={(event) =>
              setNewUser({ ...newUser, name: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            value={newUser.email}
            onChange={(event) =>
              setNewUser({ ...newUser, email: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Mot de passe"
            required
            value={newUser.password}
            onChange={(event) =>
              setNewUser({ ...newUser, password: event.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Register;
