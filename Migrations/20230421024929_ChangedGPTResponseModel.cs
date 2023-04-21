using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace dnd_weekend_project.Migrations
{
    /// <inheritdoc />
    public partial class ChangedGPTResponseModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Choices",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "Score",
                table: "ChatGPTResponses");

            migrationBuilder.RenameColumn(
                name: "Text",
                table: "ChatGPTResponses",
                newName: "object");

            migrationBuilder.AddColumn<int>(
                name: "created",
                table: "ChatGPTResponses",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "model",
                table: "ChatGPTResponses",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "usageId",
                table: "ChatGPTResponses",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Message",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    role = table.Column<string>(type: "text", nullable: true),
                    content = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Message", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    prompt_tokens = table.Column<int>(type: "integer", nullable: false),
                    completion_tokens = table.Column<int>(type: "integer", nullable: false),
                    total_tokens = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usage", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Choice",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    messageId = table.Column<int>(type: "integer", nullable: true),
                    finish_reason = table.Column<string>(type: "text", nullable: true),
                    index = table.Column<int>(type: "integer", nullable: false),
                    ChatGPTResponseId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Choice", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Choice_ChatGPTResponses_ChatGPTResponseId",
                        column: x => x.ChatGPTResponseId,
                        principalTable: "ChatGPTResponses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Choice_Message_messageId",
                        column: x => x.messageId,
                        principalTable: "Message",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChatGPTResponses_usageId",
                table: "ChatGPTResponses",
                column: "usageId");

            migrationBuilder.CreateIndex(
                name: "IX_Choice_ChatGPTResponseId",
                table: "Choice",
                column: "ChatGPTResponseId");

            migrationBuilder.CreateIndex(
                name: "IX_Choice_messageId",
                table: "Choice",
                column: "messageId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatGPTResponses_Usage_usageId",
                table: "ChatGPTResponses",
                column: "usageId",
                principalTable: "Usage",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatGPTResponses_Usage_usageId",
                table: "ChatGPTResponses");

            migrationBuilder.DropTable(
                name: "Choice");

            migrationBuilder.DropTable(
                name: "Usage");

            migrationBuilder.DropTable(
                name: "Message");

            migrationBuilder.DropIndex(
                name: "IX_ChatGPTResponses_usageId",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "created",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "model",
                table: "ChatGPTResponses");

            migrationBuilder.DropColumn(
                name: "usageId",
                table: "ChatGPTResponses");

            migrationBuilder.RenameColumn(
                name: "object",
                table: "ChatGPTResponses",
                newName: "Text");

            migrationBuilder.AddColumn<List<string>>(
                name: "Choices",
                table: "ChatGPTResponses",
                type: "text[]",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Score",
                table: "ChatGPTResponses",
                type: "double precision",
                nullable: true);
        }
    }
}
