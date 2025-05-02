import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../style/Login.css";

const ReLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const token = localStorage.getItem("token");
  let nomeUsuario = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      nomeUsuario = decoded.Nome;
    } catch (e) {
      console.error("Token inválido ou expirado");
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5207/api/auth/login", {
        email,
        senha,
      });

      const { token } = response.data;

      if (lembrar) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      alert("Login realizado com sucesso!");
      navigate("/produto");
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-page dark-theme">
      <header className="header">
        <div className="header-content">
          <div className="logo-button" onClick={() => navigate("/produto")}>
          7Tech
          </div>
          <nav className="nav-menu">
            <button className="nav-button" onClick={() => navigate("/login")}>
              <span>📝</span> Cadastrar
            </button>
            <button className="nav-button" onClick={() => navigate("/relogin")}>
              <span>🔑</span> {nomeUsuario || "Login"}
            </button>
            {token && (
              <button className="nav-button" onClick={() => {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                window.location.href = "/relogin";
              }}>
                <span>🚪</span> Sair
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="login-main-container">
        <div className="login-card">
          <h2>Acesse Sua Conta</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="login-options">
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
              >
                Esqueceu a senha?
              </span>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} 7Tech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ReLogin;