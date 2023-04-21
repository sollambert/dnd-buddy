using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace dnd_weekend_project.Models
{
    public class ChatGPTResponse
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }

        [JsonProperty("id")]
        public string gptId {get;set;}
        public string @object { get; set; }
        public int created { get; set; }
        public string model { get; set; }
        public Usage usage { get; set; }
        public List<Choice> choices { get; set; }
        public class Choice
        {
            public int Id { get; set; }
            public Message message { get; set; }
            public string finish_reason { get; set; }
            public int index { get; set; }
        }

        public class Message
        {
            public int Id { get; set; }
            public string role { get; set; }
            public string content { get; set; }
        }

        public class Usage
        {
            public int Id { get; set; }
            public int prompt_tokens { get; set; }
            public int completion_tokens { get; set; }
            public int total_tokens { get; set; }
        }
    }
}