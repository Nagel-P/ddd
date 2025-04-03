import React, { useState } from "react";
import LoginPage from "./LoginPage";
import "./PaginaProduto.css";

const PaginaProduto = () => {
  const [paginaAtual, setPaginaAtual] = useState("produto");

  if (paginaAtual === "login") {
    return <LoginPage voltar={() => setPaginaAtual("produto")} />;
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <div>
          <ul>
            <li onClick={() => setPaginaAtual("login")} style={{ cursor: "pointer" }}>
              <span>👤</span> Login
            </li>
            <li><span>🛒</span> Catálogo</li>
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
          <h1>Informação do produto</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            V, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, c
            onsectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum 
            dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit.</p>
          <button className="button">Comprar</button>
        </div>
      </main>
    </div>
  );
};

export default PaginaProduto;
