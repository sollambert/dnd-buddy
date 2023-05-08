using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Migrations
{
    /// <inheritdoc />
    public partial class AddedGPTRequestRelationToGPTResponse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ChatGPTRequestId",
                table: "ChatGPTResponses",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ChatGPTResponses_ChatGPTRequestId",
                table: "ChatGPTResponses",
                column: "ChatGPTRequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatGPTResponses_ChatGPTRequests_ChatGPTRequestId",
                table: "ChatGPTResponses",
                column: "ChatGPTRequestId",
                principalTable: "ChatGPTRequests",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatGPTResponses_ChatGPTRequests_ChatGPTRequestId",
                table: "ChatGPTResponses");

            migrationBuilder.DropIndex(
                name: "IX_ChatGPTResponses_ChatGPTRequestId",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "ChatGPTRequestId",
                table: "ChatGPTResponses");
        }
    }
}
