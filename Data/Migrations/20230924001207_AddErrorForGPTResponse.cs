using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddErrorForGPTResponse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ErrorId",
                table: "ChatGPTResponses",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "GPTError",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Message = table.Column<string>(type: "TEXT", nullable: true),
                    Type = table.Column<string>(type: "TEXT", nullable: true),
                    Param = table.Column<string>(type: "TEXT", nullable: true),
                    Code = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GPTError", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChatGPTResponses_ErrorId",
                table: "ChatGPTResponses",
                column: "ErrorId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatGPTResponses_GPTError_ErrorId",
                table: "ChatGPTResponses",
                column: "ErrorId",
                principalTable: "GPTError",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatGPTResponses_GPTError_ErrorId",
                table: "ChatGPTResponses");

            migrationBuilder.DropTable(
                name: "GPTError");

            migrationBuilder.DropIndex(
                name: "IX_ChatGPTResponses_ErrorId",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "ErrorId",
                table: "ChatGPTResponses");
        }
    }
}
