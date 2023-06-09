﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using dnd_buddy.Models;

#nullable disable

namespace dnd_buddy.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("dnd_buddy.Models.Campaign", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Campaigns");
                });

            modelBuilder.Entity("dnd_buddy.Models.CampaignNote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CampaignId")
                        .HasColumnType("integer");

                    b.Property<string>("Note")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.ToTable("CampaignNotes");
                });

            modelBuilder.Entity("dnd_buddy.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Background")
                        .HasColumnType("text");

                    b.Property<int?>("CampaignId")
                        .HasColumnType("integer");

                    b.Property<byte>("Charisma")
                        .HasColumnType("smallint");

                    b.Property<byte>("Constitution")
                        .HasColumnType("smallint");

                    b.Property<byte>("Dexterity")
                        .HasColumnType("smallint");

                    b.Property<byte>("Intelligence")
                        .HasColumnType("smallint");

                    b.Property<byte>("Level")
                        .HasColumnType("smallint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Profession")
                        .HasColumnType("integer");

                    b.Property<int>("Race")
                        .HasColumnType("integer");

                    b.Property<byte>("Strength")
                        .HasColumnType("smallint");

                    b.Property<byte>("Wisdom")
                        .HasColumnType("smallint");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Prompt")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Temperature")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("ChatGPTRequests");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("ChatGPTRequestId")
                        .HasColumnType("integer");

                    b.Property<int>("created")
                        .HasColumnType("integer");

                    b.Property<string>("gptId")
                        .HasColumnType("text");

                    b.Property<string>("model")
                        .HasColumnType("text");

                    b.Property<string>("object")
                        .HasColumnType("text");

                    b.Property<int?>("usageId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ChatGPTRequestId");

                    b.HasIndex("usageId");

                    b.ToTable("ChatGPTResponses");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse+Choice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("ChatGPTResponseId")
                        .HasColumnType("integer");

                    b.Property<string>("finish_reason")
                        .HasColumnType("text");

                    b.Property<int>("index")
                        .HasColumnType("integer");

                    b.Property<int?>("messageId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ChatGPTResponseId");

                    b.HasIndex("messageId");

                    b.ToTable("Choice");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse+Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("content")
                        .HasColumnType("text");

                    b.Property<string>("role")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Message");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse+Usage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("completion_tokens")
                        .HasColumnType("integer");

                    b.Property<int>("prompt_tokens")
                        .HasColumnType("integer");

                    b.Property<int>("total_tokens")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Usage");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("CR")
                        .HasColumnType("integer");

                    b.Property<int?>("CampaignId")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Exp")
                        .HasColumnType("integer");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<List<string>>("Notes")
                        .HasColumnType("text[]");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.ToTable("Encounters");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter+Entity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ApiUrl")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int?>("EncounterId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("EncounterId");

                    b.ToTable("Entity");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter+Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ApiUrl")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int?>("EncounterId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("EncounterId");

                    b.ToTable("Item");
                });

            modelBuilder.Entity("dnd_buddy.Models.CampaignNote", b =>
                {
                    b.HasOne("dnd_buddy.Models.Campaign", null)
                        .WithMany("Notes")
                        .HasForeignKey("CampaignId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("dnd_buddy.Models.Character", b =>
                {
                    b.HasOne("dnd_buddy.Models.Campaign", null)
                        .WithMany("Characters")
                        .HasForeignKey("CampaignId");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse", b =>
                {
                    b.HasOne("dnd_buddy.Models.ChatGPTRequest", "request")
                        .WithMany()
                        .HasForeignKey("ChatGPTRequestId");

                    b.HasOne("dnd_buddy.Models.ChatGPTResponse+Usage", "usage")
                        .WithMany()
                        .HasForeignKey("usageId");

                    b.Navigation("request");

                    b.Navigation("usage");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse+Choice", b =>
                {
                    b.HasOne("dnd_buddy.Models.ChatGPTResponse", null)
                        .WithMany("choices")
                        .HasForeignKey("ChatGPTResponseId");

                    b.HasOne("dnd_buddy.Models.ChatGPTResponse+Message", "message")
                        .WithMany()
                        .HasForeignKey("messageId");

                    b.Navigation("message");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter", b =>
                {
                    b.HasOne("dnd_buddy.Models.Campaign", null)
                        .WithMany("Encounters")
                        .HasForeignKey("CampaignId");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter+Entity", b =>
                {
                    b.HasOne("dnd_buddy.Models.Encounter", null)
                        .WithMany("Entities")
                        .HasForeignKey("EncounterId");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter+Item", b =>
                {
                    b.HasOne("dnd_buddy.Models.Encounter", null)
                        .WithMany("Items")
                        .HasForeignKey("EncounterId");
                });

            modelBuilder.Entity("dnd_buddy.Models.Campaign", b =>
                {
                    b.Navigation("Characters");

                    b.Navigation("Encounters");

                    b.Navigation("Notes");
                });

            modelBuilder.Entity("dnd_buddy.Models.ChatGPTResponse", b =>
                {
                    b.Navigation("choices");
                });

            modelBuilder.Entity("dnd_buddy.Models.Encounter", b =>
                {
                    b.Navigation("Entities");

                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}
