using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace dnd_buddy.Models
{
    public class ChatGPTRequest
    {
        [Key]
        public int Id {get; set;}
        [Required]
        public string Prompt {get; set;}
        [Required]
        public double Temperature {get; set;}

        public ChatGPTRequest() {
            this.Prompt = "Tell me a story with a maximum of 100 characters.";
            this.Temperature = 1.0;
        }

        public ChatGPTRequest(string Prompt, float Temperature) {
            this.Prompt = Prompt;
            this.Temperature = Temperature;
        }
    }
}