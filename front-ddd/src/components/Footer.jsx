import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} 7Tech. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;