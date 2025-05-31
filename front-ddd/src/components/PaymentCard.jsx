import React from 'react';
import './PaymentCard.css';

const PaymentCard = () => {
  return (
    <div className="card">
      <a className="card1" href="/avaliacao">
        <p>Faça aqui o teste para pegar seu Certificado seventec.!</p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </a>
    </div>
  );
};

export default PaymentCard;