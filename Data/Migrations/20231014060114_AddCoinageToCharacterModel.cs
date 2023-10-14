using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddCoinageToCharacterModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CoinsId",
                table: "Characters",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Coinage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Copper = table.Column<int>(type: "INTEGER", nullable: false),
                    Silver = table.Column<int>(type: "INTEGER", nullable: false),
                    Electrum = table.Column<int>(type: "INTEGER", nullable: false),
                    Gold = table.Column<int>(type: "INTEGER", nullable: false),
                    Platinum = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coinage", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Characters_CoinsId",
                table: "Characters",
                column: "CoinsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Coinage_CoinsId",
                table: "Characters",
                column: "CoinsId",
                principalTable: "Coinage",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Coinage_CoinsId",
                table: "Characters");

            migrationBuilder.DropTable(
                name: "Coinage");

            migrationBuilder.DropIndex(
                name: "IX_Characters_CoinsId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "CoinsId",
                table: "Characters");
        }
    }
}
