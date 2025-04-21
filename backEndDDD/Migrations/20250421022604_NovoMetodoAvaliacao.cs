using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backEndDDD.Migrations
{
    /// <inheritdoc />
    public partial class NovoMetodoAvaliacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AvaliacaoCompleta",
                table: "Usuarios",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "CertificadoUrl",
                table: "Usuarios",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<double>(
                name: "NotaAvaliacao",
                table: "Usuarios",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "PagamentoConfirmado",
                table: "Usuarios",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvaliacaoCompleta",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "CertificadoUrl",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "NotaAvaliacao",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "PagamentoConfirmado",
                table: "Usuarios");
        }
    }
}
