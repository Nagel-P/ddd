using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Models
{
    public class Pergunta
    {
    public int Id { get; set; }

    public int CursoId { get; set; } // Curso associado à pergunta

    public string Enunciado { get; set; }
    public string RespostaCorreta { get; set; }

     // Relacionamento com Curso
    //  public int CursoId { get; set; } Classe não existe ainda
    public Curso? Curso { get; set; }
    }
}