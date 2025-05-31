import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../style/Produto.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BenefitCards from "../components/BenefitCards"; 
import ProductCard from "../components/ProductCard";
import PaymentCard from "../components/PaymentCard";

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

  return (
    <div className="product-page dark-theme">
      <Header />
      <main className="main-container">
        <section className="product-description">
          <h1>Nosso Produto Exclusivo</h1>
          <p>
          Se você é um desenvolvedor júnior que sente que entender as regras de negócio e construir sistemas realmente alinhados às necessidades do cliente é um desafio, este material foi feito para você.
          O DDDescomplica é um guia prático, direto ao ponto e com uma linguagem acessível para quem está iniciando na jornada de desenvolvimento orientado ao domínio — o famoso Domain-Driven Design (DDD).
          <br/><br/>
          Mais do que um conteúdo teórico, este PDF foi pensado para descomplicar conceitos, conectar teoria com prática e preparar você para aplicar o DDD em cenários reais. O objetivo é ajudá-lo a sair do básico e começar a enxergar o software com a lente do negócio, mesmo que você nunca tenha trabalhado com DDD antes.
          </p>
        </section>
        <ProductCard />
        <BenefitCards />
        <PaymentCard />
      </main>
      <Footer />
    </div>
  );
};

export default Produto;