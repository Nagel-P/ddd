import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/Pagamento.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';


const Pagamento = () => {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

const simularPagamento = async () => {
  setProcessando(true);
  try {
    const response = await axios.post("http://localhost:5207/pagamento/create-checkout-session");
    window.location.href = response.data.url; // Redireciona pro Stripe
  } catch (error) {
    console.error("Erro ao criar checkout:", error);
    setProcessando(false);
  }
};


  return (
    <div className="container">
      <Header/>
      <main className="main-content">
        <div className="product-info">
          <h1>Pagamento</h1>
          <p>Escolha uma forma de pagamento para continuar.</p>
          <button
            className="button"
            onClick={simularPagamento}
            disabled={processando}
          >
            {processando ? "Processando..." : "Confirmar Pagamento"}
          </button>
          <button
            className="button"
            onClick={() => navigate("/produto")}
            style={{
              backgroundColor: "#ccc",
              color: "#000",
              marginTop: "10px",
            }}
          >
            Cancelar
          </button>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Pagamento;
