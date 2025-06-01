import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Resultado.css";

const Resultado = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nota = 0, acertos = 0, aprovado = false } = location.state || {};

  const emitirCertificado = () => {
    const link = document.createElement('a');
    link.href = '/Certificados/Certificate.pdf';
    link.download = 'Certificado_DDD.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tentarNovamente = () => {
    navigate("/avaliacao");
  };

  return (
    <div className="resultado-container dark-theme">
      <Header />
      <main className="resultado-main">
        <div className="resultado-card">
          <h1>Resultado da Prova</h1>

          <div className="resultado-content">
            <p><strong>Acertos:</strong> {acertos} de 10</p>
            <p><strong>Nota:</strong> {nota.toFixed(2)}%</p>
            <p><strong>Status:</strong> {aprovado ? "Aprovado 🎉" : "Reprovado ❌"}</p>

            <div className="resultado-buttons">
              {aprovado && (
                <button onClick={emitirCertificado} className="resultado-button emit">
                  Emitir Certificado
                </button>
              )}
              <button onClick={tentarNovamente} className="resultado-button retry">
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resultado;