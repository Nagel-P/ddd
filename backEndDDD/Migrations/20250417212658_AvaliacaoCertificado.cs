using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backEndDDD.Migrations
{
    /// <inheritdoc />
    public partial class AvaliacaoCertificado : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Avaliacoes_Usuarios_UsuarioId",
                table: "Avaliacoes");

            migrationBuilder.DropForeignKey(
                name: "FK_RespostasUsuario_Avaliacoes_AvaliacaoId",
                table: "RespostasUsuario");

            migrationBuilder.DropForeignKey(
                name: "FK_RespostasUsuario_Perguntas_PerguntaId",
                table: "RespostasUsuario");

            migrationBuilder.DropTable(
                name: "Cursos");

            migrationBuilder.DropIndex(
                name: "IX_Avaliacoes_UsuarioId",
                table: "Avaliacoes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RespostasUsuario",
                table: "RespostasUsuario");

            migrationBuilder.DropColumn(
                name: "Enunciado",
                table: "Perguntas");

            migrationBuilder.DropColumn(
                name: "Aprovado",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "CursoId",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "DataConclusao",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "Correta",
                table: "RespostasUsuario");

            migrationBuilder.DropColumn(
                name: "RespostaDada",
                table: "RespostasUsuario");

            migrationBuilder.RenameTable(
                name: "RespostasUsuario",
                newName: "RespostasUsuarios");

            migrationBuilder.RenameColumn(
                name: "RespostaCorreta",
                table: "Perguntas",
                newName: "Texto");

            migrationBuilder.RenameColumn(
                name: "CursoId",
                table: "Perguntas",
                newName: "Ordem");

            migrationBuilder.RenameColumn(
                name: "Nota",
                table: "Avaliacoes",
                newName: "NotaMinimaParaCertificado");

            migrationBuilder.RenameColumn(
                name: "PerguntaId",
                table: "RespostasUsuarios",
                newName: "UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_RespostasUsuario_PerguntaId",
                table: "RespostasUsuarios",
                newName: "IX_RespostasUsuarios_UsuarioId");

            migrationBuilder.RenameIndex(
                name: "IX_RespostasUsuario_AvaliacaoId",
                table: "RespostasUsuarios",
                newName: "IX_RespostasUsuarios_AvaliacaoId");

            migrationBuilder.AddColumn<int>(
                name: "AvaliacaoId",
                table: "Perguntas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Avaliacoes",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Titulo",
                table: "Avaliacoes",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataResposta",
                table: "RespostasUsuarios",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<decimal>(
                name: "NotaFinal",
                table: "RespostasUsuarios",
                type: "decimal(65,30)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RespostasUsuarios",
                table: "RespostasUsuarios",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Alternativas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    PerguntaId = table.Column<int>(type: "int", nullable: false),
                    Texto = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    EhCorreta = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alternativas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Alternativas_Perguntas_PerguntaId",
                        column: x => x.PerguntaId,
                        principalTable: "Perguntas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Certificados",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RespostaUsuarioId = table.Column<int>(type: "int", nullable: false),
                    CodigoCertificado = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    DataEmissao = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certificados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Certificados_RespostasUsuarios_RespostaUsuarioId",
                        column: x => x.RespostaUsuarioId,
                        principalTable: "RespostasUsuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "RespostasUsuarioDetalhes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RespostaUsuarioId = table.Column<int>(type: "int", nullable: false),
                    PerguntaId = table.Column<int>(type: "int", nullable: false),
                    AlternativaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RespostasUsuarioDetalhes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RespostasUsuarioDetalhes_Alternativas_AlternativaId",
                        column: x => x.AlternativaId,
                        principalTable: "Alternativas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RespostasUsuarioDetalhes_Perguntas_PerguntaId",
                        column: x => x.PerguntaId,
                        principalTable: "Perguntas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RespostasUsuarioDetalhes_RespostasUsuarios_RespostaUsuarioId",
                        column: x => x.RespostaUsuarioId,
                        principalTable: "RespostasUsuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Perguntas_AvaliacaoId",
                table: "Perguntas",
                column: "AvaliacaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Alternativas_PerguntaId",
                table: "Alternativas",
                column: "PerguntaId");

            migrationBuilder.CreateIndex(
                name: "IX_Certificados_RespostaUsuarioId",
                table: "Certificados",
                column: "RespostaUsuarioId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RespostasUsuarioDetalhes_AlternativaId",
                table: "RespostasUsuarioDetalhes",
                column: "AlternativaId");

            migrationBuilder.CreateIndex(
                name: "IX_RespostasUsuarioDetalhes_PerguntaId",
                table: "RespostasUsuarioDetalhes",
                column: "PerguntaId");

            migrationBuilder.CreateIndex(
                name: "IX_RespostasUsuarioDetalhes_RespostaUsuarioId",
                table: "RespostasUsuarioDetalhes",
                column: "RespostaUsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Perguntas_Avaliacoes_AvaliacaoId",
                table: "Perguntas",
                column: "AvaliacaoId",
                principalTable: "Avaliacoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RespostasUsuarios_Avaliacoes_AvaliacaoId",
                table: "RespostasUsuarios",
                column: "AvaliacaoId",
                principalTable: "Avaliacoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RespostasUsuarios_Usuarios_UsuarioId",
                table: "RespostasUsuarios",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Perguntas_Avaliacoes_AvaliacaoId",
                table: "Perguntas");

            migrationBuilder.DropForeignKey(
                name: "FK_RespostasUsuarios_Avaliacoes_AvaliacaoId",
                table: "RespostasUsuarios");

            migrationBuilder.DropForeignKey(
                name: "FK_RespostasUsuarios_Usuarios_UsuarioId",
                table: "RespostasUsuarios");

            migrationBuilder.DropTable(
                name: "Certificados");

            migrationBuilder.DropTable(
                name: "RespostasUsuarioDetalhes");

            migrationBuilder.DropTable(
                name: "Alternativas");

            migrationBuilder.DropIndex(
                name: "IX_Perguntas_AvaliacaoId",
                table: "Perguntas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RespostasUsuarios",
                table: "RespostasUsuarios");

            migrationBuilder.DropColumn(
                name: "AvaliacaoId",
                table: "Perguntas");

            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "Titulo",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "DataResposta",
                table: "RespostasUsuarios");

            migrationBuilder.DropColumn(
                name: "NotaFinal",
                table: "RespostasUsuarios");

            migrationBuilder.RenameTable(
                name: "RespostasUsuarios",
                newName: "RespostasUsuario");

            migrationBuilder.RenameColumn(
                name: "Texto",
                table: "Perguntas",
                newName: "RespostaCorreta");

            migrationBuilder.RenameColumn(
                name: "Ordem",
                table: "Perguntas",
                newName: "CursoId");

            migrationBuilder.RenameColumn(
                name: "NotaMinimaParaCertificado",
                table: "Avaliacoes",
                newName: "Nota");

            migrationBuilder.RenameColumn(
                name: "UsuarioId",
                table: "RespostasUsuario",
                newName: "PerguntaId");

            migrationBuilder.RenameIndex(
                name: "IX_RespostasUsuarios_UsuarioId",
                table: "RespostasUsuario",
                newName: "IX_RespostasUsuario_PerguntaId");

            migrationBuilder.RenameIndex(
                name: "IX_RespostasUsuarios_AvaliacaoId",
                table: "RespostasUsuario",
                newName: "IX_RespostasUsuario_AvaliacaoId");

            migrationBuilder.AddColumn<string>(
                name: "Enunciado",
                table: "Perguntas",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<bool>(
                name: "Aprovado",
                table: "Avaliacoes",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "CursoId",
                table: "Avaliacoes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "DataConclusao",
                table: "Avaliacoes",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "UsuarioId",
                table: "Avaliacoes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Correta",
                table: "RespostasUsuario",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "RespostaDada",
                table: "RespostasUsuario",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RespostasUsuario",
                table: "RespostasUsuario",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Cursos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descricao = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Titulo = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cursos", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Avaliacoes_UsuarioId",
                table: "Avaliacoes",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Avaliacoes_Usuarios_UsuarioId",
                table: "Avaliacoes",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RespostasUsuario_Avaliacoes_AvaliacaoId",
                table: "RespostasUsuario",
                column: "AvaliacaoId",
                principalTable: "Avaliacoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RespostasUsuario_Perguntas_PerguntaId",
                table: "RespostasUsuario",
                column: "PerguntaId",
                principalTable: "Perguntas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
