using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;

namespace dnd_weekend_project.Models
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Race { HUMAN, ELF, DWARF, GNOME, HALFLING, HALF_ORC, HALF_ELF }
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Profession { BARD, CLERIC, DRUID, FIGHTER, RANGER, WIZARD, SORCEROR, PALADIN }


    public class Character
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public byte Level { get; set; }
        public byte Strength { get; set; }
        public byte Dexterity { get; set; }
        public byte Constitution { get; set; }
        public byte Intelligence { get; set; }
        public byte Wisdom { get; set; }
        public byte Charisma { get; set; }

        [Required]
        public Race PlayerRace { get; set; }
        [Required]
        public Profession PlayerProfession { get; set; }

        public Character() {
            this.Name = "";
            this.Level = 0;
            this.PlayerProfession = Profession.FIGHTER;
            this.PlayerRace = Race.HUMAN;
            this.Strength = 0;
            this.Dexterity = 0;
            this.Constitution = 0;
            this.Intelligence = 0;
            this.Wisdom = 0;
            this.Charisma = 0;
        }

        public Character(
            string Name,
            byte Level,
            Race PlayerRace,
            Profession PlayerProfession
        )
        {
            this.Name = Name;
            this.Level = Level;
            this.PlayerRace = PlayerRace;
            this.PlayerProfession = PlayerProfession;
            this.Strength = RollStat();
            this.Dexterity = RollStat();
            this.Constitution = RollStat();
            this.Intelligence = RollStat();
            this.Wisdom = RollStat();
            this.Charisma = RollStat();
        }

        public Character(
            string Name,
            byte Level,
            Race PlayerRace,
            Profession PlayerProfession,
            byte Strength,
            byte Dexterity,
            byte Constitution,
            byte Intelligence,
            byte Wisdom,
            byte Charisma)
        {
            this.Name = Name;
            this.Level = Level;
            this.PlayerProfession = PlayerProfession;
            this.PlayerRace = PlayerRace;
            this.Strength = Strength;
            this.Dexterity = Dexterity;
            this.Constitution = Constitution;
            this.Intelligence = Intelligence;
            this.Wisdom = Wisdom;
            this.Charisma = Charisma;
        }



        public byte RollStat()
        {
            Random random = new Random();
            List<byte> rolls = new List<byte>();
            for (int i = 0; i < 5; i++)
            {
                byte roll = (byte)random.NextInt64(1, 7);
                rolls.Add(roll);
                Console.WriteLine(roll);
            }
            rolls.Sort();
            byte stat = (byte)(rolls[2] + rolls[3] + rolls[4]);
            return stat;
        }

    }
}