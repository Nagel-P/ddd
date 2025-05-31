import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/Pagamento.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Pagamento = () => {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

  const simularPagamento = async () => {
    setProcessando(true);
    try {
      const response = await axios.post("http://localhost:5207/pagamento/create-checkout-session");
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Erro ao criar checkout:", error);
      setProcessando(false);
    }
  };

  return (
    <div className="payment-page dark-theme">
      <Header />
      <main className="payment-main-container">
        <div className="payment-plan">
          <div className="payment-inner">
            <h2>Finalizar Compra</h2>
            <p className="payment-info">Complete seu pagamento para acessar o material exclusivo</p>
            
            <ul className="payment-features">
              <li>
                <span className="payment-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>
                <span><strong>DDDescomplica</strong> - Guia completo de DDD</span>
              </li>
              <li>
                <span className="payment-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>
                <span>Valor: <strong>R$ 120,00</strong></span>
              </li>
            </ul>
            
            <div className="payment-action">
              <button
                className="payment-button"
                onClick={simularPagamento}
                disabled={processando}
              >
                {processando ? "Processando..." : "Confirmar Pagamento"}
              </button>
              <button
                className="payment-button cancel-button"
                onClick={() => navigate("/produto")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pagamento;