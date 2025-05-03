using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Models
{
    public class RespostaUsuario
    {
    public int Id { get; set; }

    public int AvaliacaoId { get; set; }
    public int PerguntaId { get; set; }

    public string RespostaDada { get; set; }
    public bool Correta { get; set; }

    public Avaliacao Avaliacao { get; set; }
    public Pergunta Pergunta { get; set; }  
    }
}