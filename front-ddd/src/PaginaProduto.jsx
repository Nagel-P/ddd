import React, { useState } from "react";
import LoginPage from "./LoginPage";
import pdfimg from './pdf.png'
import "./PaginaProduto.css";

const PaginaProduto = () => {
  const [paginaAtual, setPaginaAtual] = useState("produto");

  if (paginaAtual === "login") {
    return <LoginPage voltar={() => setPaginaAtual("produto")} />;
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <div>
          <ul>
            <li onClick={() => setPaginaAtual("login")} style={{ cursor: "pointer" }}>
              <span>👤</span> Login
            </li>
            <li><span>🛒</span> Catálogo</li>
          </ul>
        </div>
        <div className="contact-info">
          <p>empresaficticia@email.com</p>
          <p>55 41 9xxxx-xxxx</p>
          <p>Rua X, Curitiba - PR</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="product-descricao"> 
          <h1>Informação do produto</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aperiam, aliquam ipsa ad, quidem distinctio laborum eligendi 
            impedit illum odit veniam dolor velit, molestias cum. 
            Est aliquid amet maxime ipsa ex. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi, voluptate ratione 
            sequi dolores natus soluta ipsum labore accusantium voluptatum. 
            Nemo, ad excepturi quis corporis ea delectus ipsam voluptate 
            placeat dignissimos laceat dignissimos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aperiam, aliquam ipsa ad, quidem distinctio laborum eligendi 
            impedit illum odit veniam dolor velit, molestias cum. 
            Est aliquid amet maxime ipsa ex. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi, voluptate ratione 
            sequi dolores natus soluta ipsum labore accusantium voluptatum. 
            Nemo, ad excepturi quis corporis ea delectus ipsam voluptate </p>
        </div>
        <div className="product-info">
          <h1>Nome do produto</h1>
          <img className="capa" src={pdfimg}/>
          <button className="button">Comprar</button>
        </div>
      </main>
    </div>
  );
};

export default PaginaProduto;
