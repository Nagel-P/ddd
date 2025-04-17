import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";

const ReLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false); // Novo estado

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5207/api/auth/login", {
        email,
        senha,
      });

      const { token } = response.data;

      // Armazenar token com base no "lembrar"
      if (lembrar) {
        localStorage.setItem("token", token); // persistente
      } else {
        sessionStorage.setItem("token", token); // temporário
      }

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
          <li onClick={() => {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            window.location.href = "/relogin";
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

            {/* Lembrar de mim + Esqueceu a senha */}
            <div className="login-extra">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                />
                Lembrar de mim
              </label>

              <span
                className="forgot-password"
                onClick={() => alert("Funcionalidade ainda não implementada.")}
                style={{ cursor: "pointer", color: "#3498db" }}
              >
                Esqueceu a senha?
              </span>
            </div>

            

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ReLogin;
