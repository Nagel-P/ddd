using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backEndDDD.Migrations
{
    /// <inheritdoc />
    public partial class NomeDaMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Perguntas_CursoId",
                table: "Perguntas",
                column: "CursoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Perguntas_Cursos_CursoId",
                table: "Perguntas",
                column: "CursoId",
                principalTable: "Cursos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Perguntas_Cursos_CursoId",
                table: "Perguntas");

            migrationBuilder.DropIndex(
                name: "IX_Perguntas_CursoId",
                table: "Perguntas");
        }
    }
}
