using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialImportOfModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Campaigns",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campaigns", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChatGPTRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Prompt = table.Column<string>(type: "TEXT", nullable: false),
                    Temperature = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatGPTRequests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Message",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    role = table.Column<string>(type: "TEXT", nullable: false),
                    content = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Message", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    prompt_tokens = table.Column<int>(type: "INTEGER", nullable: false),
                    completion_tokens = table.Column<int>(type: "INTEGER", nullable: false),
                    total_tokens = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usage", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CampaignNotes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CampaignId = table.Column<int>(type: "INTEGER", nullable: false),
                    Note = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CampaignNotes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CampaignNotes_Campaigns_CampaignId",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Level = table.Column<byte>(type: "INTEGER", nullable: false),
                    Strength = table.Column<byte>(type: "INTEGER", nullable: false),
                    Dexterity = table.Column<byte>(type: "INTEGER", nullable: false),
                    Constitution = table.Column<byte>(type: "INTEGER", nullable: false),
                    Intelligence = table.Column<byte>(type: "INTEGER", nullable: false),
                    Wisdom = table.Column<byte>(type: "INTEGER", nullable: false),
                    Charisma = table.Column<byte>(type: "INTEGER", nullable: false),
                    Background = table.Column<string>(type: "TEXT", nullable: false),
                    Race = table.Column<int>(type: "INTEGER", nullable: false),
                    Profession = table.Column<int>(type: "INTEGER", nullable: false),
                    CampaignId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Characters_Campaigns_CampaignId",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Encounters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CR = table.Column<int>(type: "INTEGER", nullable: false),
                    Exp = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    CampaignId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Encounters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Encounters_Campaigns_CampaignId",
                        column: x => x.CampaignId,
                        principalTable: "Campaigns",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ChatGPTResponses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    gptId = table.Column<string>(type: "TEXT", nullable: false),
                    @object = table.Column<string>(name: "object", type: "TEXT", nullable: false),
                    created = table.Column<int>(type: "INTEGER", nullable: false),
                    model = table.Column<string>(type: "TEXT", nullable: false),
                    usageId = table.Column<int>(type: "INTEGER", nullable: false),
                    ChatGPTRequestId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatGPTResponses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChatGPTResponses_ChatGPTRequests_ChatGPTRequestId",
                        column: x => x.ChatGPTRequestId,
                        principalTable: "ChatGPTRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChatGPTResponses_Usage_usageId",
                        column: x => x.usageId,
                        principalTable: "Usage",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Entity",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ApiUrl = table.Column<string>(type: "TEXT", nullable: false),
                    EncounterId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Entity_Encounters_EncounterId",
                        column: x => x.EncounterId,
                        principalTable: "Encounters",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ApiUrl = table.Column<string>(type: "TEXT", nullable: false),
                    EncounterId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Item_Encounters_EncounterId",
                        column: x => x.EncounterId,
                        principalTable: "Encounters",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Choice",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    messageId = table.Column<int>(type: "INTEGER", nullable: false),
                    finish_reason = table.Column<string>(type: "TEXT", nullable: false),
                    index = table.Column<int>(type: "INTEGER", nullable: false),
                    ChatGPTResponseId = table.Column<int>(type: "INTEGER", nullable: true)
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
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CampaignNotes_CampaignId",
                table: "CampaignNotes",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_CampaignId",
                table: "Characters",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatGPTResponses_ChatGPTRequestId",
                table: "ChatGPTResponses",
                column: "ChatGPTRequestId");

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

            migrationBuilder.CreateIndex(
                name: "IX_Encounters_CampaignId",
                table: "Encounters",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Entity_EncounterId",
                table: "Entity",
                column: "EncounterId");

            migrationBuilder.CreateIndex(
                name: "IX_Item_EncounterId",
                table: "Item",
                column: "EncounterId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CampaignNotes");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "Choice");

            migrationBuilder.DropTable(
                name: "Entity");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropTable(
                name: "ChatGPTResponses");

            migrationBuilder.DropTable(
                name: "Message");

            migrationBuilder.DropTable(
                name: "Encounters");

            migrationBuilder.DropTable(
                name: "ChatGPTRequests");

            migrationBuilder.DropTable(
                name: "Usage");

            migrationBuilder.DropTable(
                name: "Campaigns");
        }
    }
}
