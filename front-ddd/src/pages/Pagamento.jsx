import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/Pagamento.css";

const Pagamento = ({ onAprovar }) => {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

  const simularPagamento = () => {
    setProcessando(true);
    setTimeout(() => {
      onAprovar(); // ainda registra no estado global
      navigate("/download");
    }, 2000);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            <span>👤</span> Login
          </li>
          <li onClick={() => navigate("/produto")}><span>⬅️</span> Voltar</li>
        </ul>
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
          <button className="button" onClick={() => navigate("/produto")} style={{ backgroundColor: '#ccc', color: '#000', marginTop: '10px' }}>
            Cancelar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Pagamento;
