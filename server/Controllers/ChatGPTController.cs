using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using dnd_weekend_project.Models;

namespace dnd_weekend_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatGPTController : ControllerBase
    {
        static HttpClient httpClient = new HttpClient();
        private readonly ApplicationContext _context;
        public ChatGPTController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SendPrompt([FromBody] ChatGPTRequest request)
        {
            _context.Add(request);
            string apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
            string apiUrl = "https://api.openai.com/v1/chat/completions";

            var messages = new[]
                {
                    new {   role = "system", content = "You are a DND dungeon master."},
                    new {   role = "user",  content = request.Prompt}
                };
            var requestBody = new
            {
                model = "gpt-3.5-turbo",
                messages
            };

            string requestBodyJson = JsonConvert.SerializeObject(requestBody);

            // Create an instance of HttpClient and set the authorization header
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

            // Make a POST request to the API endpoint with the request body
            StringContent content = new StringContent(requestBodyJson, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content);
            string responseContent = await response.Content.ReadAsStringAsync();
            // JsonSerializerSettings jsonSettings = new JsonSerializerSettings(){ ContractResolver = new IgnorePropertiesResolver(new[] { "Prop1", "Prop2" }) };

            // Read the response content as a string
            ChatGPTResponse deserialized = JsonConvert.DeserializeObject<ChatGPTResponse>(responseContent);

            // Print the response content to the console
            Console.WriteLine(deserialized);

            _context.Add(deserialized);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetResponseById), deserialized.choices);
        }

        [HttpGet("request")]
        public IEnumerable<ChatGPTRequest> GetRequests() {
            return _context.ChatGPTRequests;
        }

        [HttpGet("request/{id}")]
        public ChatGPTRequest GetRequestById(int id)
        {
            return _context.ChatGPTRequests.Find(id);
        }

        [HttpGet("response/{id}")]
        public ChatGPTResponse GetResponseById(int id)
        {
            return _context.ChatGPTResponses.Find(id);
        }
    }
}