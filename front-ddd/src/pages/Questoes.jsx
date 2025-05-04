import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function Questoes() {
  const { cursoId } = useParams();
  const navigate = useNavigate();
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [carregando, setCarregando] = useState(true);

  const usuarioId = localStorage.getItem("usuarioId");

  useEffect(() => {
    async function verificarECarregar() {
      try {
        const avaliacoes = await axios.get(`http://localhost:5207/api/avaliacao/usuario/${usuarioId}/curso/${cursoId}`);
        
        if (avaliacoes.data.jaFez) {
          alert("Você já realizou esta avaliação.");
          navigate("/dashboard");
          return;
        }

        const res = await axios.get(`http://localhost:5207/api/avaliacao/perguntas/curso/${cursoId}`);
        setPerguntas(res.data);
        setCarregando(false);
      } catch (err) {
        console.error(err);
        alert("Erro ao carregar avaliação.");
      }
    }

    verificarECarregar();
  }, [cursoId, navigate, usuarioId]);

  function selecionarResposta(perguntaId, resposta) {
    setRespostas(prev => ({
      ...prev,
      [perguntaId]: resposta
    }));
  }

  async function enviarRespostas() {
    const respostasFormatadas = Object.keys(respostas).map(perguntaId => ({
      perguntaId: Number(perguntaId),
      respostaDada: respostas[perguntaId]
    }));

    try {
      const response = await axios.post(`http://localhost:5207/api/avaliacao/enviar-respostas`, {
        usuarioId: Number(usuarioId),
        cursoId: Number(cursoId),
        respostas: respostasFormatadas
      });

      alert(response.data.mensagem);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar avaliação.");
    }
  }

  if (carregando) {
    return <div>Carregando avaliação...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Avaliação</h1>
      {perguntas.map((pergunta, index) => (
        <div key={pergunta.id} className="mb-8">
          <h2 className="text-xl mb-2">{index + 1}. {pergunta.enunciado}</h2>
          <div className="space-y-2">
            {pergunta.alternativas.map((alternativa, idx) => (
              <div key={idx}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`pergunta-${pergunta.id}`}
                    value={alternativa}
                    checked={respostas[pergunta.id] === alternativa}
                    onChange={() => selecionarResposta(pergunta.id, alternativa)}
                    className="mr-2"
                  />
                  {alternativa}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={enviarRespostas}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Enviar Avaliação
      </button>
    </div>
  );
}
