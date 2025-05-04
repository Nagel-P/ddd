import React from "react";
import './BenefitCards.css';

const BenefitCards = () => {
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
  );
};

export default BenefitCards;