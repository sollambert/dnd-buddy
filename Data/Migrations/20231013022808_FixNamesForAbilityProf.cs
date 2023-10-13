using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class FixNamesForAbilityProf : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "wisProf",
                table: "Characters",
                newName: "WisProf");

            migrationBuilder.RenameColumn(
                name: "strProf",
                table: "Characters",
                newName: "StrProf");

            migrationBuilder.RenameColumn(
                name: "intProf",
                table: "Characters",
                newName: "IntProf");

            migrationBuilder.RenameColumn(
                name: "dexProf",
                table: "Characters",
                newName: "DexProf");

            migrationBuilder.RenameColumn(
                name: "conProf",
                table: "Characters",
                newName: "ConProf");

            migrationBuilder.RenameColumn(
                name: "chaProf",
                table: "Characters",
                newName: "ChaProf");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "WisProf",
                table: "Characters",
                newName: "wisProf");

            migrationBuilder.RenameColumn(
                name: "StrProf",
                table: "Characters",
                newName: "strProf");

            migrationBuilder.RenameColumn(
                name: "IntProf",
                table: "Characters",
                newName: "intProf");

            migrationBuilder.RenameColumn(
                name: "DexProf",
                table: "Characters",
                newName: "dexProf");

            migrationBuilder.RenameColumn(
                name: "ConProf",
                table: "Characters",
                newName: "conProf");

            migrationBuilder.RenameColumn(
                name: "ChaProf",
                table: "Characters",
                newName: "chaProf");
        }
    }
}
