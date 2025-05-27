using backEndDDD.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Stripe;
using backEndDDD.Models; // ou o namespace que você estiver usando


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Stripe para pagamento
builder.Services.Configure<StripeSettings>(
    builder.Configuration.GetSection("Stripe")
);
StripeConfiguration.ApiKey = builder.Configuration["Stripe:SecretKey"];


// 🌐 CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// 📦 DbContext
var connectionString = builder.Configuration.GetConnectionString("AppDbConnectionString");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

// 🔐 JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false; // Mantenha false em desenvolvimento
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "suaapi.com", // deve bater com o issuer na geração do token
            ValidAudience = "suaapi.com",
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("igao-lenda-inventou-o-backend(tem-que-ter-mais-bytes)"))
        };
    });

// ✅ Criação da aplicação
var app = builder.Build();

// 🔄 Pipeline de execução
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

// ⚠️ Ordem importante: autenticação antes da autorização
app.UseAuthentication();
app.UseAuthorization();

// 🧭 Mapear controllers
app.MapControllers();

app.Run();
