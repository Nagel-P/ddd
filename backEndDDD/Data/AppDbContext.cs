using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backEndDDD.Models;
using Microsoft.EntityFrameworkCore;

namespace backEndDDD.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}

        public DbSet <Usuario> Usuarios{ get; set; }

        public DbSet<Avaliacao> Avaliacoes { get; set; }
        public DbSet<Pergunta> Perguntas { get; set; }
        public DbSet<RespostaUsuario> RespostasUsuario { get; set; }
        public DbSet<Curso> Cursos { get; set; }
    }
}