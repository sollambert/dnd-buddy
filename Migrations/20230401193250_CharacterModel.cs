using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace dnd_weekend_project.Migrations
{
    /// <inheritdoc />
    public partial class CharacterModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Level = table.Column<byte>(type: "smallint", nullable: false),
                    Strength = table.Column<byte>(type: "smallint", nullable: false),
                    Dexterity = table.Column<byte>(type: "smallint", nullable: false),
                    Constitution = table.Column<byte>(type: "smallint", nullable: false),
                    Intelligence = table.Column<byte>(type: "smallint", nullable: false),
                    Wisdom = table.Column<byte>(type: "smallint", nullable: false),
                    Charisma = table.Column<byte>(type: "smallint", nullable: false),
                    PlayerRace = table.Column<int>(type: "integer", nullable: false),
                    PlayerProfession = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Characters");
        }
    }
}
