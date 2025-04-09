import React from "react";
import { useNavigate } from "react-router-dom";
import pdfimg from "../externals/pdf.png";
import "../style/Produto.css";

const Produto = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <aside className="sidebar">
        <div>
          <ul>
            <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio velit id veniam enim quam, modi quia corporis.
            Sequi consectetur corporis nesciunt aperiam doloremque obcaecati,
            explicabo cumque nam, ratione, laudantium impedit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nobis ut deserunt minima animi accusamus tempora nesciunt reprehenderit quod,
            voluptas dolores fugit sunt provident quam eum?
            Perspiciatis voluptate tenetur quia. Dignissimos.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nulla quas, quae corrupti beatae expedita iste?
            Alias omnis molestias et autem, doloremque expedita,
            odio a nobis dolorem fugiat vitae porro.
          </p>
        </div>
        <div className="product-info">
          <h1>Nome do produto</h1>
          <img className="capa" src={pdfimg} alt="PDF" />
          <button className="button" onClick={() => navigate("/pagamento")}>
            Comprar
          </button>
        </div>
      </main>
    </div>
  );
};

export default Produto;
