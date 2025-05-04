import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import pdfimg from "../assets/pdf.png";
import './ProductCard.css';

const ProductCard = () => {
  const navigate = useNavigate();

  // Função para verificar autenticação
  const isAuthenticated = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return false;
    
    try {
      jwtDecode(token);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleAction = () => {
    if (isAuthenticated()) {
      navigate("/download");
    } else {
      navigate("/pagamento");
    }
  };

  return (
    <div className="product-display">
      <div className="plan">
        <div className="inner">
          {!isAuthenticated() && (
            <span className="pricing">
              <span>R$ 120</span>
            </span>
          )}
          
          <p className="title">DDDescomplica</p>
          <p className="info">A solução completa para juniors interessados.</p>
          
          <ul className="features">
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span><strong>Certificado</strong> para 1 usuário</span>
            </li>
            <li>
              <span className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              <span>Acesso <strong>Vitalício</strong></span>
            </li>
          </ul>
          
          <div className="action">
            <button className="button" onClick={handleAction}>
              {isAuthenticated() ? "Faça o Download" : "Comprar agora"}
            </button>
          </div>
        </div>
        
        <div className="pdf-preview">
          <img src={pdfimg} alt="Visualização do PDF" />
          <p>Visualização do produto</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;