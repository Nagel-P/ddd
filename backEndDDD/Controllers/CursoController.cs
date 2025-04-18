using backEndDDD.Data;
using backEndDDD.DTOs;
using backEndDDD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CursoController : ControllerBase
    {
     private readonly AppDbContext _context;

    public CursoController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult CadastrarCurso([FromBody] Curso curso)
    {
        _context.Cursos.Add(curso);
        _context.SaveChanges();
        return Ok(curso);
    }

    [HttpGet]
    public IActionResult ListarCursos()
    {
        var cursos = _context.Cursos.ToList();
        return Ok(cursos);
    }
}
}