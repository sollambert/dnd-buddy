using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddHitPointsDataToCharacterModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HitDice",
                table: "Characters",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Hitpoints",
                table: "Characters",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MaxHitpoints",
                table: "Characters",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TempHitpoints",
                table: "Characters",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HitDice",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Hitpoints",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "MaxHitpoints",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TempHitpoints",
                table: "Characters");
        }
    }
}
