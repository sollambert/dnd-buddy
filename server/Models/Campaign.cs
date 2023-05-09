
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace dnd_buddy.Models
{
    public class Campaign {
        [Key]
        public int Id {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}
        public List<string> Notes {get; set;}
        [ForeignKey("CampaignId")]
        public virtual List<Encounter> Encounters {get; set;}
        [ForeignKey("CampaignId")]
        public List<Character> Characters {get; set;}
        public Campaign() {
            this.Encounters = new List<Encounter>();
            this.Name = "New Campaign";
            this.Description = "";
            this.Characters = new List<Character>();
            this.Notes = new List<string>();
        }
    }
}