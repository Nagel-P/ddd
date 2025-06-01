import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/Questoes.css";

const Questoes = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));

  const questions = [
    {
      question: "Qual é o principal objetivo do DDD?",
      options: {
        A: "Criar interfaces bonitas",
        B: "Alinhar software com o domínio de negócio",
        C: "Otimizar performance de queries",
        D: "Reduzir custos de infraestrutura"
      },
      correctAnswer: "B"
    },
    {
      question: "O que é um Aggregate Root no DDD?",
      options: {
        A: "Um framework para frontend",
        B: "Uma entidade que agrega outras e controla acesso",
        C: "Um padrão de design de banco de dados",
        D: "Um tipo de teste unitário"
      },
      correctAnswer: "B"
    },
    {
      question: "Qual destes NÃO é um building block do DDD?",
      options: {
        A: "Value Object",
        B: "Entity",
        C: "Repository",
        D: "Singleton"
      },
      correctAnswer: "D"
    },
    {
      question: "O que é Ubiquitous Language no DDD?",
      options: {
        A: "Linguagem de programação universal",
        B: "Linguagem comum entre desenvolvedores e especialistas de domínio",
        C: "Framework para internacionalização",
        D: "Padrão de documentação"
      },
      correctAnswer: "B"
    },
    {
      question: "Qual a diferença entre Entidade e Value Object?",
      options: {
        A: "Entidades têm identidade, Value Objects não",
        B: "Value Objects são imutáveis, Entidades não",
        C: "Ambos são iguais no DDD",
        D: "As opções A e B estão corretas"
      },
      correctAnswer: "D"
    },
    {
      question: "Para que serve um Service no DDD?",
      options: {
        A: "Lógica que não pertence a nenhuma entidade ou value object",
        B: "Comunicação com bancos de dados",
        C: "Criação de interfaces gráficas",
        D: "Gerenciamento de transações"
      },
      correctAnswer: "A"
    },
    {
      question: "O que é Bounded Context?",
      options: {
        A: "Limite de um domínio específico com linguagem própria",
        B: "Contexto de execução do servidor",
        C: "Limite de memória para uma aplicação",
        D: "Contexto de segurança"
      },
      correctAnswer: "A"
    },
    {
      question: "Qual a função de um Repository?",
      options: {
        A: "Fornecer interface para persistência de aggregates",
        B: "Gerenciar transações de banco de dados",
        C: "Criar relatórios",
        D: "Implementar regras de negócio"
      },
      correctAnswer: "A"
    },
    {
      question: "O que é Anti-Corruption Layer?",
      options: {
        A: "Padrão para isolar sistemas legados",
        B: "Camada de segurança contra hackers",
        C: "Mecanismo de cache",
        D: "Técnica de otimização de queries"
      },
      correctAnswer: "A"
    },
    {
      question: "Qual a importância do Event Storming no DDD?",
      options: {
        A: "Mapear eventos de domínio com especialistas",
        B: "Otimizar performance",
        C: "Criar documentação técnica",
        D: "Implementar testes automatizados"
      },
      correctAnswer: "A"
    }
  ];

 const handleOptionSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });

    const score = (correctCount / questions.length) * 100;
    const aprovado = score >= 70;

    navigate("/resultado", {
      state: {
        nota: score,
        acertos: correctCount,
        aprovado: aprovado
      }
    });
  };

  return (
    <div className="questoes-container dark-theme">
      <Header />
      <main className="questoes-main">
        <div className="questoes-card">
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>

          <h1>Questionário DDD</h1>
          <p className="question-counter">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>

          <div className="question-content">
            <h2>{questions[currentQuestion].question}</h2>

            <div className="options-container">
              {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
                <div key={key} className={`option ${answers[currentQuestion] === key ? 'selected' : ''}`} onClick={() => handleOptionSelect(key)}>
                  <span className="option-letter">{key}</span>
                  <span className="option-text">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation-buttons">
            <button onClick={handlePrevQuestion} disabled={currentQuestion === 0} className="nav-button prev-button">
              Anterior
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button onClick={handleNextQuestion} disabled={answers[currentQuestion] === null} className="nav-button next-button">
                Próxima
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={answers[currentQuestion] === null} className="nav-button submit-button">
                Finalizar e Ver resultado
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Questoes;