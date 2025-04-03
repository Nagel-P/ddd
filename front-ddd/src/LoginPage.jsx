import React from "react";
import "./LoginPage.css";

const LoginPage = ({ voltar }) => {
  return (
    <div className="login-page">
      {/* Sidebar */}
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

      {/* Conteúdo principal */}
      <main className="login-main">
        <div className="login-box">
          <form>
            <label>Email</label>
            <input type="email" />

            <label>Nome</label>
            <input type="text" />

            <label>Senha</label>
            <input type="password" />

            <label>Confirmar Senha</label>
            <input type="password" />

            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
