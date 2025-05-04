import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Avaliacao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            <span>🔑</span> Login
          </li>
          <li onClick={() => navigate("/produto")} style={{ cursor: "pointer" }}>
            <span>📦</span> Catálogo
          </li>
          <li onClick={() => navigate("/download")} style={{ cursor: "pointer" }}>
            <span>⬅️</span> Voltar ao Download
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
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
              <div className="product-descricao">
                <h1>Avaliação de Conhecimentos</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit id veniam enim
                  quam, modi quia corporis. Sequi consectetur corporis nesciunt aperiam doloremque
                  obcaecati, explicabo cumque nam, ratione, laudantium impedit. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Nobis ut deserunt minima animi accusamus tempora nesciunt
                  reprehenderit quod, voluptas dolores fugit sunt provident quam eum? Perspiciatis
                  voluptate tenetur quia. Dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Perferendis nulla quas, quae corrupti beatae expedita iste? Alias omnis molestias
                  et autem, doloremque expedita, odio a nobis dolorem fugiat vitae porro.
                </p>
              </div>
      
              <div className="product-info">
          <h1>Avaliação On-line</h1>
          <p>
            Clique no botão para acessar o formulário da avaliação
            e realizar um exame com direito a certificado on-line!!
          </p>
          <button
            className="button"
            onClick={() => navigate("/questoes")} style={{ cursor: "pointer" }}
          >
            📝 Realizar Avaliação
          </button>
        </div>
            </main>
    </div>
  );
};

export default Avaliacao;
