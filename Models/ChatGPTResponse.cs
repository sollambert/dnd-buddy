using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace dnd_buddy.Models
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
        [ForeignKey("usageId")]
        public virtual Usage usage { get; set; }
        [ForeignKey("ChatGPTResponseId")]
        public virtual List<Choice> choices { get; set; }
        [ForeignKey("ChatGPTRequestId")]
        public virtual ChatGPTRequest request {get; set; }
        public GPTError? Error {get; set;}
        public class Choice
        {
            public int Id { get; set; }
            [ForeignKey("messageId")]
            public virtual Message message { get; set; }
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
        public class GPTError
        {
            public int Id {get; set;}
            public string? Message {get; set;}
            public string? Type {get; set;}
            public string? Param {get; set;}
            public string? Code {get; set;}
        }
    }
}