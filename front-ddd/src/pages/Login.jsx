import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../style/Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuario = { nome, email, senha, cpf, telefone };

    try {
      await axios.post("http://localhost:5207/api/users", usuario);
      alert("Usuário cadastrado com sucesso!");

      const loginResponse = await axios.post("http://localhost:5207/api/auth/login", {
        email,
        senha,
      });

      const { token } = loginResponse.data;
      localStorage.setItem("token", token);
      navigate("/produto");
    } catch (err) {
      console.error("Erro ao cadastrar ou logar:", err.response?.data || err.message);
      alert("Erro ao cadastrar ou logar usuário!");
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
          <h2>Criar Nova Conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>CPF</label>
              <input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="text"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Confirmar Senha</label>
              <input
                type="password"
                value={confirmarSenha}
                onChange={e => setConfirmarSenha(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="login-button">
              Cadastrar
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

export default LoginPage;