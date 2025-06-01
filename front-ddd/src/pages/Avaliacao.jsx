import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Avaliacao.css";

const Avaliacao = () => {
  const navigate = useNavigate();

  const iniciarAvaliacao = () => {
    navigate("/questoes");
  };

  return (
    <div className="avaliacao-container dark-theme">
      <Header />
      <main className="avaliacao-main">
        <div className="avaliacao-card">
          <h1>Avaliação DDD</h1>
          
          <div className="avaliacao-content">
            <h2>Preparação para a Prova</h2>
            
            <div className="rules-list">
              <div className="rule-item">
                <div className="rule-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
                <p><strong>Baseado no PDF:</strong> Todas as questões referem-se ao material do curso DDDescomplica</p>
              </div>

              <div className="rule-item">
                <div className="rule-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
                <p><strong>Formato:</strong> 10 questões objetivas (A a D) sobre conceitos-chave do DDD</p>
              </div>

              <div className="rule-item">
                <div className="rule-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
                <p><strong>Aprovação:</strong> Acerto mínimo de 70% para emissão do certificado</p>
              </div>

              <div className="rule-item">
                <div className="rule-icon">
                  <svg height="24" width="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
                <p><strong>Navegação:</strong> Use os botões "Anterior" e "Próxima" para percorrer as questões</p>
              </div>
            </div>

            <div className="action-button">
              <button 
                onClick={iniciarAvaliacao}
                className="start-button"
              >
                Começar Avaliação Agora
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Avaliacao;
