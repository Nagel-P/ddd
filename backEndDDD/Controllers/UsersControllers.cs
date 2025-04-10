using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backEndDDD.Data;
using backEndDDD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersControllers : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
            {
            
            return Ok(usuario);
            }
        private readonly AppDbContext _appDbContext;

        public UsersControllers(AppDbContext appDbContext) 
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddUsuario(Usuario usuario) 
        {
            if (usuario == null){
                return BadRequest("Dados inválidos.");
            }

            _appDbContext.Usuarios.Add(usuario);
            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult <IEnumerable<Usuario>>> GetUsuarios()
        {
            var usuarios = await _appDbContext.Usuarios.ToListAsync();

            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult <Usuario>> GetUsuario(int id)
        {
            var usuario = await _appDbContext.Usuarios.FindAsync(id);

            if (usuario == null){
                return NotFound($"Usuário com o id - {id} não foi encontrado!");
            }

            return Ok(usuario);
        }

        [HttpPut ("{id}")]
        public async Task<IActionResult> UpdateUsuario(int id, [FromBody] Usuario usuarioAtualizado)
        {
            var usuarioExistente = await _appDbContext.Usuarios.FindAsync(id);

            if (usuarioExistente == null) {
                return NotFound($"Usuário com o id - {id} não foi encontrado!");
            }

            _appDbContext.Entry(usuarioExistente).CurrentValues.SetValues(usuarioAtualizado);

            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, usuarioAtualizado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario (int id) {
            var usuario = await _appDbContext.Usuarios.FindAsync (id);

            if (usuario == null){
                return NotFound($"Usuário com  o id - {id} não foi encontrado!");
            }

            _appDbContext.Remove(usuario);
            await _appDbContext.SaveChangesAsync();

            return Ok($"Personagem com o ID - {id} foi removido com sucesso!");
        }
    }
}