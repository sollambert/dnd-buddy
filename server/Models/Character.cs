using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace dnd_buddy.Models
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Races { HUMAN, ELF, DWARF, GNOME, HALFLING, HALF_ORC, HALF_ELF }
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Professions { BARD, CLERIC, DRUID, FIGHTER, RANGER, ROGUE, WIZARD, SORCEROR, PALADIN }


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
        public Races Race { get; set; }
        [Required]
        public Professions Profession { get; set; }

        public Character() {
            this.Name = "";
            this.Level = 1;
            this.Profession = Professions.FIGHTER;
            this.Race = Races.HUMAN;
            this.Strength = RollStat();
            this.Dexterity = RollStat();
            this.Constitution = RollStat();
            this.Intelligence = RollStat();
            this.Wisdom = RollStat();
            this.Charisma = RollStat();
        }

        public byte RollStat()
        {
            Random random = new Random();
            List<byte> rolls = new List<byte>();
            for (int i = 0; i < 5; i++)
            {
                byte roll = (byte)random.NextInt64(1, 7);
                rolls.Add(roll);
            }
            rolls.Sort();
            byte stat = (byte)(rolls[2] + rolls[3] + rolls[4]);
            return stat;
        }

    }
}