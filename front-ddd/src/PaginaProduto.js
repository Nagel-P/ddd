import React from "react";
import './PaginaProduto.css';

const PaginaProduto = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <ul>
            <li><span>👤</span>Login</li>
            <li><span>🛒</span>Catálogo</li>
          </ul>
        </div>
        <div className="contact-info">
          <p>empresaficticia@email.com</p>
          <p>55 41 9xxxx-xxxx</p>
          <p>Rua X, Curitiba - PR</p>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="product-info">
          <h1>Informação do produto</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="button">Comprar</button>
        </div>
      </main>
    </div>
  );
};

export default PaginaProduto;
