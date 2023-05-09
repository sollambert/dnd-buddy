using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace dnd_buddy.Models
{

    public class Encounter
    {
        [Key]
        public int Id { get; set; }
        public List<Entity> Entities { get; set; }
        public List<string> Notes { get; set; }
        public int CR { get; set; }
        public int Exp { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public Encounter()
        {
            this.Entities = new List<Entity>();
            this.Notes = new List<string>();
            this.CR = 0;
            this.Exp = 0;
            this.Name = "New Encounter";
            this.Description = "";
            this.ImageUrl = "";
        }
        public class Entity
        {
            [Key]
            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public string ApiUrl { get; set; }
            public Entity()
            {
                this.Name = "New Entity";
                this.Description = "";
                this.ApiUrl = "";
            }
        }
        public class Item
        {
            [Key]
            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public string ApiUrl { get; set; }
            public Item()
            {
                this.Name = "New Entity";
                this.Description = "";
                this.ApiUrl = "";
            }
        }
    }
}