using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backEndDDD.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }= string.Empty;
        public string Cpf  { get; set; }= string.Empty;
        public string Email { get; set; }= string.Empty;
        public string Telefone { get; set; }= string.Empty;
        public string Senha { get; set; }= string.Empty;
    }
}