using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace backEndDDD.Models
{
    public class Pergunta
    {
        public int Id { get; set; }

        public int CursoId { get; set; }

        public string Enunciado { get; set; }

        public string RespostaCorreta { get; set; }

        public Curso? Curso { get; set; }

        // Campo privado que será salvo no banco como string
        public string AlternativasJson { get; set; }

        // Campo que usamos na aplicação como lista de strings
        [NotMapped]
        public List<string> Alternativas
        {
            get => string.IsNullOrEmpty(AlternativasJson)
                ? new List<string>()
                : JsonSerializer.Deserialize<List<string>>(AlternativasJson) ?? new List<string>();

            set => AlternativasJson = JsonSerializer.Serialize(value);
        }
    }
}
