using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddAbilityProfsAndProficiency : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "Inspiration",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.AddColumn<byte>(
                name: "Proficiency",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.AddColumn<bool>(
                name: "chaProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "conProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "dexProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "intProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "strProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "wisProf",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Inspiration",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Proficiency",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "chaProf",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "conProf",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "dexProf",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "intProf",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "strProf",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "wisProf",
                table: "Characters");
        }
    }
}
