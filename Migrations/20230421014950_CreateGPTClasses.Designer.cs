﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using dnd_weekend_project.Models;

#nullable disable

namespace dnd_weekend_project.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20230421014950_CreateGPTClasses")]
    partial class CreateGPTClasses
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("dnd_weekend_project.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

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

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("dnd_weekend_project.Models.ChatGPTRequest", b =>
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

            modelBuilder.Entity("dnd_weekend_project.Models.ChatGPTResponse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<List<string>>("Choices")
                        .HasColumnType("text[]");

                    b.Property<double?>("Score")
                        .HasColumnType("double precision");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("ChatGPTResponses");
                });
#pragma warning restore 612, 618
        }
    }
}