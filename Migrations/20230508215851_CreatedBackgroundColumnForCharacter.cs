using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Migrations
{
    /// <inheritdoc />
    public partial class CreatedBackgroundColumnForCharacter : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Background",
                table: "Characters",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Background",
                table: "Characters");
        }
    }
}
