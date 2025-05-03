import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import pdfimg from "../externals/pdf.png";
import "../style/Produto.css";

const Produto = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let nomeUsuario = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      nomeUsuario = decoded.Nome;
    } catch (e) {
      console.error("Token inválido ou expirado");
    }
  }

  const benefits = [
    {
      title: "Alta Performance",
      description: "Desempenho excepcional em todas as situações com tecnologia de ponta que garante velocidade e eficiência.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Fácil Integração",
      description: "Conecte-se facilmente com seus sistemas existentes através de nossa API moderna e documentação detalhada.",
      image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Segurança Avançada",
      description: "Proteção de dados em nível empresarial com criptografia de ponta a ponta e conformidade com os principais padrões do setor.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Suporte 24/7",
      description: "Nossa equipe de especialistas está disponível a qualquer momento para garantir que você tenha a melhor experiência possível.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Atualizações Constantes",
      description: "Receba regularmente novos recursos e melhorias de desempenho sem custos adicionais.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Multiplataforma",
      description: "Acesse de qualquer dispositivo e sistema operacional com uma experiência consistente e otimizada.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];
  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
        <li onClick={() => navigate("/relogin")} style={{ cursor: "pointer" }}>
            <span>🔑</span> {nomeUsuario || "Login"}
          </li>
          <li onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            <span>📝</span> Cadastrar
          </li>
          <li onClick={() => navigate("/produto")} style={{ cursor: "pointer" }}>
            <span>📦</span> Catálogo
          </li>

          <li
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/relogin";
            }}
            style={{ cursor: "pointer" }}
          >
            <span>🚪</span> Sair
          </li>
        </ul>

  return (
    <div className="product-page dark-theme">
      <header className="header">
        <div className="header-content">
          <div className="logo-button" onClick={() => navigate("/produto")}>
            7Tech
          </div>
          <nav className="nav-menu">
            <button className="nav-button" onClick={() => navigate("/login")}>
              Cadastrar
            </button>
            <button className="nav-button" onClick={() => navigate("/relogin")}>
               {nomeUsuario || "Login"}
            </button>
            {token && (
              <button className="nav-button" onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/relogin";
              }}>
                <span>🚪</span> Sair
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="main-container">
        <section className="product-description">
          <h1>Nosso Produto Exclusivo</h1>
          <p>
            Solução completa para suas necessidades profissionais. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio velit id veniam enim quam, modi quia corporis. Sequi consectetur corporis nesciunt aperiam doloremque.
          </p>
        </section>

        <div className="product-display">
          <div className="plan">
            <div className="inner">
              <span className="pricing">
                <span>
                  R$ 99 <small>/ ano</small>
                </span>
              </span>
              <p className="title">Edição Premium</p>
              <p className="info">A solução completa para profissionais exigentes.</p>
              <ul className="features">
                <li>
                  <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span>
                  <span><strong>Licença</strong> para 1 usuário</span>
                </li>
                <li>
                  <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span>
                  <span><strong>Atualizações</strong> gratuitas</span>
                </li>
                <li>
                  <span className="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span>
                  <span>Suporte <strong>24/7</strong></span>
                </li>
              </ul>
              <div className="action">
                <button className="button" onClick={() => navigate("/pagamento")}>
                  Comprar agora
                </button>
              </div>
            </div>
            <div className="pdf-preview">
              <img src={pdfimg} alt="Visualização do PDF" />
              <p>Visualização do produto</p>
            </div>
          </div>
        </div>

        <section className="benefits-section">
          <h2>Por que escolher nosso produto?</h2>
          <div className="benefits-container">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="card-image-container">
                  <img src={benefit.image} alt={benefit.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} 7Tech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Produto;