using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backEndDDD.Data;
using backEndDDD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;


namespace backEndDDD.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersControllers : ControllerBase
    {
 
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

        [HttpPost("login")]
            public async Task<IActionResult> Login([FromBody] LoginRequest login)
            {
                var usuario = await _appDbContext.Usuarios
                .FirstOrDefaultAsync(u => u.Email == login.Email && u.Senha == login.Senha);

            if (usuario == null)
            {
                return Unauthorized("Email ou senha inválidos");
            }

            var token = GerarToken(usuario);
                return Ok(new { token });
            }

        private string GerarToken(Usuario usuario)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes("chave_super_secreta_123!"); // Substitua por algo mais seguro e mova para appsettings
                var tokenDescriptor = new SecurityTokenDescriptor
            {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, usuario.Nome),
                new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString())
            }),
            Expires = DateTime.UtcNow.AddHours(2),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Senha { get; set; }
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