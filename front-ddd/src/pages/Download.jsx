import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/relogin");
    }
  }, [navigate]);

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => navigate("/relogin")} style={{ cursor: "pointer" }}>
            <span>🔑</span> Login
          </li>
          <li onClick={() => navigate("/produto")} style={{ cursor: "pointer" }}>
            <span>📦</span> Catálogo
          </li>
          <li onClick={() => navigate("/avaliacao")} style={{ cursor: "pointer" }}>
            <span>⭐</span> Avaliação
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/relogin";
            }}
          >
            <span>🚪</span> Sair
          </li>
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
