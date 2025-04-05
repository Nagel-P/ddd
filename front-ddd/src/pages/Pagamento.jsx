import React, { useState } from "react";
import LoginPage from "./Login";
import "../style/Pagamento.css"; // Reutiliza o estilo existente

const Pagamento = ({ onAprovar, onCancelar }) => {
  const [paginaAtual, setPaginaAtual] = useState("pagamento");
  const [processando, setProcessando] = useState(false);

  if (paginaAtual === "login") {
    return <LoginPage voltar={() => setPaginaAtual("pagamento")} />;
  }

  const simularPagamento = () => {
    setProcessando(true);
    setTimeout(() => {
      onAprovar();
    }, 2000); // Simula um delay para "processar pagamento"
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div>
          <ul>
            <li onClick={() => setPaginaAtual("login")} style={{ cursor: "pointer" }}>
              <span>👤</span> Login
            </li>
            <li onClick={onCancelar}><span>⬅️</span> Voltar</li>
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
          <h1>Pagamento</h1>
          <p>Escolha uma forma de pagamento para continuar.</p>
          <button className="button" onClick={simularPagamento} disabled={processando}>
            {processando ? "Processando..." : "Confirmar Pagamento"}
          </button>
          <button className="button" onClick={onCancelar} style={{ backgroundColor: '#ccc', color: '#000', marginTop: '10px' }}>
            Cancelar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Pagamento;
