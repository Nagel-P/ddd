import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            <span>👤</span> Login
          </li>
          <li><span>📄</span> Download</li>
        </ul>
        <div className="contact-info">
          <p>empresaficticia@email.com</p>
          <p>55 41 9xxxx-xxxx</p>
          <p>Rua X, Curitiba - PR</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="product-info">
          <h1>Obrigado pela compra!</h1>
          <p>Seu arquivo está pronto para download.</p>
          <a href="/externals/arquivo.pdf" download>
            <button className="button">📥 Baixar Arquivo</button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Download;
