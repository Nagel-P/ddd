import React from 'react';
import './Vantagens.css';

const vantagens = [
  { id: 1, titulo: "Alta Performance", descricao: "Executa operações de forma extremamente rápida.", imagem: "https://via.placeholder.com/100" },
  { id: 2, titulo: "Interface Intuitiva", descricao: "Design pensado para facilitar o uso.", imagem: "https://via.placeholder.com/100" },
  { id: 3, titulo: "Compatibilidade", descricao: "Funciona em diversos dispositivos e navegadores.", imagem: "https://via.placeholder.com/100" },
  { id: 4, titulo: "Atualizações Frequentes", descricao: "Sempre em evolução com melhorias constantes.", imagem: "https://via.placeholder.com/100" },
  { id: 5, titulo: "Suporte Técnico", descricao: "Equipe pronta para te ajudar sempre.", imagem: "https://via.placeholder.com/100" },
  { id: 6, titulo: "Segurança", descricao: "Proteção de dados em primeiro lugar.", imagem: "https://via.placeholder.com/100" },
  { id: 7, titulo: "Customizável", descricao: "Adapte às suas necessidades facilmente.", imagem: "https://via.placeholder.com/100" },
  { id: 8, titulo: "Integrações", descricao: "Conecte com suas ferramentas favoritas.", imagem: "https://via.placeholder.com/100" },
  { id: 9, titulo: "Custo-Benefício", descricao: "Qualidade premium por um preço justo.", imagem: "https://via.placeholder.com/100" },
  { id: 10, titulo: "Alta Disponibilidade", descricao: "Sempre online, sempre disponível.", imagem: "https://via.placeholder.com/100" },
];

const Vantagens = () => {
  return (
    <section className="vantagens-section">
      <h2>Vantagens do Produto</h2>
      <div className="vantagens-grid">
        {vantagens.map(v => (
          <div key={v.id} className="vantagem-card">
            <img src={v.imagem} alt={v.titulo} />
            <h3>{v.titulo}</h3>
            <p>{v.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vantagens;