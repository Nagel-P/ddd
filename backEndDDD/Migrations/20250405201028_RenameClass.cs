using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backEndDDD.Migrations
{
    public partial class RenameClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Renomeia a tabela
            migrationBuilder.RenameTable(
                name: "userCadastros",
                newName: "Usuarios");

            // Renomeia a coluna "Name" para "Nome"
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Usuarios",
                newName: "Nome");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Reverte a renomeação da coluna
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Usuarios",
                newName: "Name");

            // Reverte a renomeação da tabela
            migrationBuilder.RenameTable(
                name: "Usuarios",
                newName: "userCadastros");
        }
    }
}