// backEndDDD/Controllers/CertificadoController.cs
using Microsoft.AspNetCore.Mvc;
using backEndDDD.Models;
using backEndDDD.Data;
using DinkToPdf;
using DinkToPdf.Contracts;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/certificado")]
    public class CertificadoController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConverter _pdfConverter;

        public CertificadoController(AppDbContext context, IConverter pdfConverter)
        {
            _context = context;
            _pdfConverter = pdfConverter;
        }

        // 📜 Gerar certificado (só se nota >= 6)
        [HttpGet("gerar/{userId}")]
        public async Task<IActionResult> GerarCertificado(int userId)
        {
            var usuario = await _context.Usuarios.FindAsync(userId);
            
            if (usuario == null) return NotFound();
            if (!usuario.AvaliacaoCompleta || usuario.NotaAvaliacao < 6)
                return BadRequest("Avaliação não concluída ou nota insuficiente");

            // 🎨 HTML do certificado (simplificado)
            var html = $@"
                <html>
                    <body style='text-align: center; font-family: Arial;'>
                        <h1>Certificado de Conclusão</h1>
                        <p>Certificamos que <strong>{usuario.Nome}</strong></p>
                        <p>Concluiu a avaliação com nota {usuario.NotaAvaliacao}</p>
                        <p>Data: {DateTime.Now:dd/MM/yyyy}</p>
                    </body>
                </html>";

            // 🔄 Converter para PDF
            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = {
                    PaperSize = PaperKind.A4,
                    Orientation = Orientation.Landscape
                },
                Objects = { new ObjectSettings { HtmlContent = html } }
            };

            byte[] pdf = _pdfConverter.Convert(doc);
            
            // Salva URL (opcional)
            usuario.CertificadoUrl = $"/certificados/{usuario.Id}_{DateTime.Now:yyyyMMdd}.pdf";
            await _context.SaveChangesAsync();

            return File(pdf, "application/pdf", $"certificado_{usuario.Nome}.pdf");
        }
    }
}