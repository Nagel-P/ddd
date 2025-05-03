import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <p>© {new Date().getFullYear()} Nome da Empresa — Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;