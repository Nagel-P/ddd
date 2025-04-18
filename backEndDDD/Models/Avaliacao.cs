using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Models
{
    public class Avaliacao
    {
    public int Id { get; set; }

    public int UsuarioId { get; set; } // ID do usuário que fez a avaliação
    public int CursoId { get; set; }   // ID do curso/pdf que ele comprou

    public decimal Nota { get; set; }
    public bool Aprovado { get; set; }
    public DateTime DataConclusao { get; set; }

    // Relacionamentos (opcional)
    public Usuario Usuario { get; set; }
    // public Curso Curso { get; set; } comentar no momento
    }
}