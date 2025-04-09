import React, { useState } from "react";
import axios from "axios";
import "../style/Login.css";

const LoginPage = ({ voltar }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cpf, setCpf] = useState(""); // NOVO
  const [telefone, setTelefone] = useState(""); // NOVO

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
      telefone
    };

    try {
      const response = await axios.post("http://localhost:5207/api/users", usuario);
      console.log("Resposta da API:", response.data);
      alert("Usuário armazenado com sucesso!");
    } catch (err) {
      console.error("Erro ao conectar com API:", err.response?.data || err.message);
      alert("Erro ao armazenar usuário!");
    }
  };

  return (
    <div className="login-page">
      <aside className="login-sidebar">
        <button onClick={voltar}>
          <span>↩</span> Voltar
        </button>
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
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

            <label>Nome</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />

            <label>CPF</label> {/* NOVO */}
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} required />

            <label>Telefone</label> {/* NOVO */}
            <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} required />

            <label>Senha</label>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />

            <label>Confirmar Senha</label>
            <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} required />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
