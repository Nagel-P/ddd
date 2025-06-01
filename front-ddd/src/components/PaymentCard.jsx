import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './PaymentCard.css';

const PaymentCard = () => {
  const navigate = useNavigate();

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return false;

    try {
      jwtDecode(token); // Apenas valida se é um token decodificável
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isUserAuthenticated()) {
      navigate("/avaliacao");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="card">
      <a className="card1" href="/avaliacao" onClick={handleClick}>
        <p>Faça aqui o teste para pegar seu Certificado Seventec!</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
};

export default PaymentCard;