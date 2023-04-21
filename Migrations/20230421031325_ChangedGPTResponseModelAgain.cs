using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_weekend_project.Migrations
{
    /// <inheritdoc />
    public partial class ChangedGPTResponseModelAgain : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "gptId",
                table: "ChatGPTResponses",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "gptId",
                table: "ChatGPTResponses");
        }
    }
}
