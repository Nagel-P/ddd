import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cadastro = () => {
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

    const usuario = { nome, email, senha, cpf, telefone };

    try {
      await axios.post("http://localhost:5207/api/users", usuario);
      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      navigate("/login");
    } catch (err) {
      console.error("Erro ao cadastrar:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="login-page dark-theme">
      <Header />
      <main className="login-main-container">
        <div className="login-card">
          <h2>Criar Nova Conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="form-input"
              />
            </div>

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
              <label>CPF</label>
              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
                className="form-input"
                placeholder="Somente números"
              />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                className="form-input"
                placeholder="Com DDD"
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
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label>Confirmar Senha</label>
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <button type="submit" className="login-button">
              Cadastrar
            </button>

            <div className="login-options">
              <span className="register-link">
                Já tem uma conta?{" "}
                <span onClick={() => navigate("/login")} style={{cursor: "pointer", color: "#b399ff"}}>
                  Faça login
                </span>
              </span>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cadastro;