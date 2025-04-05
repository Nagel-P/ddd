import React, { useState } from "react";
import Login from "./Login";
import "../style/Download.css";

const Download = () => {
  const [paginaAtual, setPaginaAtual] = useState("download");

  if (paginaAtual === "login") {
    return <Login voltar={() => setPaginaAtual("download")} />;
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <div>
          <ul>
            <li onClick={() => setPaginaAtual("login")} style={{ cursor: "pointer" }}>
              <span>👤</span> Login
            </li>
            <li><span>📄</span> Download</li>
          </ul>
        </div>
        <div className="contact-info">
          <p>empresaficticia@email.com</p>
          <p>55 41 9xxxx-xxxx</p>
          <p>Rua X, Curitiba - PR</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="product-info">
          <h1>Obrigado pela compra!</h1>
          <p>Seu arquivo está pronto para download.</p>
          <a href="/externals/arquivo.pdf" download>
            <button className="button">📥 Baixar Arquivo</button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Download;
