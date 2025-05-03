using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Models
{
    public class Curso
    {
    [Key]
    public int Id { get; set; }

    [Required]
    public string Titulo { get; set; }

    public string Descricao { get; set; }

     public List<Pergunta> Perguntas { get; set; } = new();
    }
}