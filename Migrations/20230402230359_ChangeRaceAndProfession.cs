using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Migrations
{
    /// <inheritdoc />
    public partial class ChangeRaceAndProfession : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlayerRace",
                table: "Characters",
                newName: "Race");

            migrationBuilder.RenameColumn(
                name: "PlayerProfession",
                table: "Characters",
                newName: "Profession");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Race",
                table: "Characters",
                newName: "PlayerRace");

            migrationBuilder.RenameColumn(
                name: "Profession",
                table: "Characters",
                newName: "PlayerProfession");
        }
    }
}
