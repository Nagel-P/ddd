// backEndDDD/Controllers/AvaliacaoController.cs
using Microsoft.AspNetCore.Mvc;
using backEndDDD.Models;
using backEndDDD.Data;
using Microsoft.EntityFrameworkCore;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/avaliacao")]
    public class AvaliacaoController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;

        public AvaliacaoController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // ✅ 1. Gerar link do Google Forms (só se pagamento confirmado)
        [HttpGet("iniciar/{userId}")]
        public async Task<IActionResult> IniciarAvaliacao(int userId)
        {
            var usuario = await _context.Usuarios.FindAsync(userId);
            
            if (usuario == null) return NotFound("Usuário não encontrado");
            if (!usuario.PagamentoConfirmado) return BadRequest("Pagamento não confirmado");

            // 🔗 Link do Google Forms (substitua pelo seu)
            string formId = "1rO6i4fC9P4lSmDVmi8-jtMPe08-SIEJ_sZOU6OB6ZdM"; // Seu ID real
            string url = $"https://docs.google.com/forms/d/{formId}/viewform?usp=pp_url&entry.123456={usuario.Email}";

            return Ok(new { url });
        }

        // ✅ 2. Webhook para receber resultados (simulado)
        [HttpPost("resultado")]
        public async Task<IActionResult> ReceberResultado([FromBody] AvaliacaoResultado resultado)
        {
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == resultado.Email);
            
            if (usuario == null) return NotFound();

            usuario.AvaliacaoCompleta = true;
            usuario.NotaAvaliacao = resultado.Nota;
            
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // ✅ 3. Verificar status da avaliação
        [HttpGet("status/{userId}")]
        public async Task<IActionResult> VerificarStatus(int userId)
        {
            var usuario = await _context.Usuarios.FindAsync(userId);
            if (usuario == null) return NotFound();

            return Ok(new {
                PagamentoConfirmado = usuario.PagamentoConfirmado,
                AvaliacaoCompleta = usuario.AvaliacaoCompleta,
                Nota = usuario.NotaAvaliacao
            });
        }
    }

    // 📦 Modelo para receber resultados
    public class AvaliacaoResultado
    {
        public string Email { get; set; }
        public double Nota { get; set; }
    }
}