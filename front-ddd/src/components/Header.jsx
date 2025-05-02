import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-content">
        <h1 className="product-name">Nome do Produto</h1>
        <p className="product-description">
          Uma solução inovadora para facilitar sua vida com tecnologia.
        </p>
      </div>
    </header>
  );
};

export default Header;