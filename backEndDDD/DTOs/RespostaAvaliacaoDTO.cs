using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Controllers.DTOs
{
    public class RespostaAvaliacaoDTO
    {
    public int UsuarioId { get; set; }
    public int CursoId { get; set; }

    public List<RespostaDTO> Respostas { get; set; }

    public class RespostaDTO
    {
        public int PerguntaId { get; set; }
        public string RespostaDada { get; set; }
    }
    }
}