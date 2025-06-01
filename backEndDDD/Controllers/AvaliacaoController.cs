// Controllers/ProvaController.cs
using Microsoft.AspNetCore.Mvc;
using backEndDDD.Models;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProvaController : ControllerBase
    {
        // Gabarito correto
        private readonly List<string> gabarito = new List<string>
        {
            "B", "B", "D", "B", "D", "A", "A", "A", "A", "A"
        };

        [HttpPost("corrigir")]
        public IActionResult CorrigirProva([FromBody] ProvaModel prova)
        {
            if (prova?.Respostas == null || prova.Respostas.Count != gabarito.Count)
            {
                return BadRequest("Número de respostas inválido.");
            }

            int acertos = 0;

            for (int i = 0; i < gabarito.Count; i++)
            {
                if (prova.Respostas[i] == gabarito[i])
                {
                    acertos++;
                }
            }

            double nota = (acertos / (double)gabarito.Count) * 10;

            bool aprovado = nota >= 7;

            return Ok(new
            {
                acertos,
                nota,
                aprovado
            });
        }
    }
}
