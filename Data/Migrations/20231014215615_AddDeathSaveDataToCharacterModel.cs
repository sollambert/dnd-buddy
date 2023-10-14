using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddDeathSaveDataToCharacterModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "DeathFailures",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: (byte)0);

            migrationBuilder.AddColumn<byte>(
                name: "DeathSuccesses",
                table: "Characters",
                type: "INTEGER",
                nullable: false,
                defaultValue: (byte)0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeathFailures",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "DeathSuccesses",
                table: "Characters");
        }
    }
}
