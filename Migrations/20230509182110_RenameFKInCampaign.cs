using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_buddy.Migrations
{
    /// <inheritdoc />
    public partial class RenameFKInCampaign : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Campaigns_CharacterId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Encounters_Campaigns_EncounterId",
                table: "Encounters");

            migrationBuilder.RenameColumn(
                name: "EncounterId",
                table: "Encounters",
                newName: "CampaignId");

            migrationBuilder.RenameIndex(
                name: "IX_Encounters_EncounterId",
                table: "Encounters",
                newName: "IX_Encounters_CampaignId");

            migrationBuilder.RenameColumn(
                name: "CharacterId",
                table: "Characters",
                newName: "CampaignId");

            migrationBuilder.RenameIndex(
                name: "IX_Characters_CharacterId",
                table: "Characters",
                newName: "IX_Characters_CampaignId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Campaigns_CampaignId",
                table: "Characters",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Encounters_Campaigns_CampaignId",
                table: "Encounters",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Campaigns_CampaignId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Encounters_Campaigns_CampaignId",
                table: "Encounters");

            migrationBuilder.RenameColumn(
                name: "CampaignId",
                table: "Encounters",
                newName: "EncounterId");

            migrationBuilder.RenameIndex(
                name: "IX_Encounters_CampaignId",
                table: "Encounters",
                newName: "IX_Encounters_EncounterId");

            migrationBuilder.RenameColumn(
                name: "CampaignId",
                table: "Characters",
                newName: "CharacterId");

            migrationBuilder.RenameIndex(
                name: "IX_Characters_CampaignId",
                table: "Characters",
                newName: "IX_Characters_CharacterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Campaigns_CharacterId",
                table: "Characters",
                column: "CharacterId",
                principalTable: "Campaigns",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Encounters_Campaigns_EncounterId",
                table: "Encounters",
                column: "EncounterId",
                principalTable: "Campaigns",
                principalColumn: "Id");
        }
    }
}
