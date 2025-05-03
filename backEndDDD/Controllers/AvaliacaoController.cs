using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backEndDDD.Data;
using backEndDDD.Models;
using Microsoft.EntityFrameworkCore;
using backEndDDD.Controllers.DTOs;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AvaliacaoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AvaliacaoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/avaliacao/perguntas/curso/1
        [HttpGet("perguntas/curso/{cursoId}")]
        public async Task<ActionResult<IEnumerable<Pergunta>>> GetPerguntasPorCurso(int cursoId)
        {
            var perguntas = await _context.Perguntas
                .Where(p => p.CursoId == cursoId)
                .ToListAsync();

            if (perguntas == null || !perguntas.Any())
            {
                return NotFound("Nenhuma pergunta cadastrada para esse curso.");
            }

            return Ok(perguntas);
        }

        // GET: api/avaliacao/usuario/1/curso/2
        [HttpGet("usuario/{usuarioId}/curso/{cursoId}")]
        public async Task<IActionResult> VerificarSeFezAvaliacao(int usuarioId, int cursoId)
        {
            var existe = await _context.Avaliacoes
                .AnyAsync(a => a.UsuarioId == usuarioId && a.CursoId == cursoId);

            return Ok(new { jaFez = existe });
        }

        [HttpPost("enviar-respostas")]
        public async Task<IActionResult> EnviarRespostas([FromBody] RespostaAvaliacaoDTO dados)
        {
            // Verifica se o usuário já respondeu a avaliação
            bool jaFez = await _context.Avaliacoes
                .AnyAsync(a => a.UsuarioId == dados.UsuarioId && a.CursoId == dados.CursoId);

            if (jaFez)
            {
                return BadRequest(new { Mensagem = "Você já realizou esta avaliação." });
            }

            var perguntas = await _context.Perguntas
                .Where(p => p.CursoId == dados.CursoId)
                .ToListAsync();

            int total = perguntas.Count;
            int acertos = 0;

            var avaliacao = new Avaliacao
            {
                UsuarioId = dados.UsuarioId,
                CursoId = dados.CursoId,
                DataConclusao = DateTime.Now,
                Nota = 0, // calculado depois
                Aprovado = false
            };

            _context.Avaliacoes.Add(avaliacao);
            await _context.SaveChangesAsync(); // gerar ID

            foreach (var resposta in dados.Respostas)
            {
                var pergunta = perguntas.FirstOrDefault(p => p.Id == resposta.PerguntaId);

                bool correta = pergunta != null &&
                               resposta.RespostaDada.Trim().ToLower() == 
                               pergunta.RespostaCorreta.Trim().ToLower();

                if (correta) acertos++;

                var respostaUsuario = new RespostaUsuario
                {
                    AvaliacaoId = avaliacao.Id,
                    PerguntaId = resposta.PerguntaId,
                    RespostaDada = resposta.RespostaDada,
                    Correta = correta
                };

                _context.RespostasUsuario.Add(respostaUsuario);
            }

            decimal notaFinal = ((decimal)acertos / total) * 10;
            avaliacao.Nota = notaFinal;
            avaliacao.Aprovado = notaFinal >= 7;

            await _context.SaveChangesAsync();

            return Ok(new
            {
                Mensagem = avaliacao.Aprovado ? "Parabéns! Você foi aprovado!" : "Você não atingiu a nota mínima.",
                Nota = avaliacao.Nota,
                Aprovado = avaliacao.Aprovado
            });
        } 
    } 
}
