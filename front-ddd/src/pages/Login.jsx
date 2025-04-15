import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuario = {
      nome,
      email,
      senha,
      cpf,
      telefone,
    };

    try {
      // 1. Cadastrar o usuário
      await axios.post("http://localhost:5207/api/users", usuario);
      alert("Usuário cadastrado com sucesso!");

      // 2. Fazer login automático
      const loginResponse = await axios.post("http://localhost:5207/api/auth/login", {
        email,
        senha,
      });

      const { token } = loginResponse.data;

      // 3. Armazenar o token
      localStorage.setItem("token", token);

      // 4. Redirecionar para tela de produtos
      navigate("/produto");

    } catch (err) {
      console.error("Erro ao cadastrar ou logar:", err.response?.data || err.message);
      alert("Erro ao cadastrar ou logar usuário!");
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
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />

            <label>CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              required
            />

            <label>Telefone</label>
            <input
              type="text"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />

            <label>Confirmar Senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              required
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
