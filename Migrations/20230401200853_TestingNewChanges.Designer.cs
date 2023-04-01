﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using dnd_weekend_project.Models;

namespace dnd_weekend_project.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20230401200853_TestingNewChanges")]
    partial class TestingNewChanges
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("dnd_weekend_project.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

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

                    b.Property<int>("PlayerProfession")
                        .HasColumnType("integer");

                    b.Property<int>("PlayerRace")
                        .HasColumnType("integer");

                    b.Property<byte>("Strength")
                        .HasColumnType("smallint");

                    b.Property<byte>("Wisdom")
                        .HasColumnType("smallint");

                    b.HasKey("Id");

                    b.ToTable("Characters");
                });
#pragma warning restore 612, 618
        }
    }
}
