import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";

const ReLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5207/api/auth/login", {
        email,
        senha,
      });

      console.log("Login response:", response.data);

      const { token } = response.data;

      localStorage.setItem("token", token);

      alert("Login realizado com sucesso!");
      navigate("/produto");
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-page">
      <aside className="sidebar">
      <ul>
        <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          <span>📝</span> Cadastrar
        </li>
        <li onClick={() => navigate("/relogin")} style={{ cursor: "pointer" }}>
          <span>🔑</span> Login
        </li>
        <li onClick={() => navigate("/produto")} style={{ cursor: "pointer" }}>
          <span>📦</span> Catálogo
        </li>
        <li onClick={() => { localStorage.removeItem("token"); 
            window.location.href = "/relogin"; // redireciona para login
            }}>
          <span>🚪</span> Sair
        </li>
      </ul>
      <div className="contact-info">
        <p>empresaficticia@email.com</p>
        <p>55 41 9xxxx-xxxx</p>
        <p>Rua X, Curitiba - PR</p>
      </div>
    </aside>

      <main className="login-main">
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReLogin;
