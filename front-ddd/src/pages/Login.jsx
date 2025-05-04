import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../style/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    
    if (token) {
      try {
        jwtDecode(token);
        navigate("/produto");
      } catch (e) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        console.error("Token inválido ou expirado", e);
      }
    }
  }, [navigate]);

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
      navigate("/produto");
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login-page dark-theme">
      <Header />
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

            <div className="register-link">
              Não possui uma conta?{' '}
              <span onClick={() => navigate("/cadastro")}>
                Cadastre-se!
              </span>
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default LoginPage;